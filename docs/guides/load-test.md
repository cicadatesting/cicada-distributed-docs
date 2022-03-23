---
id: load-test
title: Writing Load Tests
sidebar_position: 2
---

Cicada is a powerful tool for running load tests. It works by spinning up
multiple `users` to run tests against your services in parallel. In this guide,
we'll create [a simple load test](https://github.com/cicadatesting/cicada-distributed-demos/tree/main/rest-api/load-test)
to simulate scaling load against the demo API in the
[integration testing guide](integration-test#creating-the-app).

## Creating the Test

To begin, create a test directory as shown in the
[integration testing guide](integration-test#creating-the-test). After
initializing the project, update the `post_user` test:

```python {7-8}
...
from cicadad.core.decorators import scenario, load_model, user_loop
from cicadad.core.scenario import n_seconds, iterations_per_second_limited
...

@scenario(engine)
@load_model(n_seconds(180, 30))
@user_loop(iterations_per_second_limited(4))
def post_user(context):
    requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )
```

This will make the `post_user` test spawn 30 users to run for 3 minutes. Each
user will be limited to making 4 requests per second.

Start the test with `cicada-distributed run` and ensure it completes.

### Viewing Metrics from the API

The demo API is bundled with Grafana and Prometheus. You can view the metrics by
visiting the Grafana UI at `http://localhost:3000/` (default username and
password is `admin` / `admin`).

Create a graph with the Prometheus datasource (`http://prometheus:9090`) to view
the requests per second to the API. Here is the view using the query
`rate(starlette_requests_total[30s])`:

![Load Model With 30 Users](/img/load-model-30-users.png)

## Adding Stages to the Test

In a more realistic scenario, load may come in different stages. Let's update
the scenario to include a period of scaling up and down. The test will now have
3 stages:

1. Ramp up to 30 users over the course of 1 minute.
2. Hover at 30 users for 3 minutes.
3. Scale back down to 0 users over the course of 1 minute.

```python {12-18}
...
from cicadad.core.decorators import scenario, load_model, user_loop
from cicadad.core.scenario import (
    n_seconds,
    iterations_per_second_limited,
    n_users_ramping,
    load_stages
)
...

@scenario(engine)
@load_model(
    load_stages(
        n_users_ramping(60, 30, skip_scaledown=True),
        n_seconds(180, 30, skip_scaledown=True),
        n_users_ramping(60, 0),
    )
)
@user_loop(iterations_per_second_limited(4))
def post_user(context):
    requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )
```

Run the test again and ensure it completes. On the machine this was tested on,
it reached 120 requests per second over the course of 5 minutes with a much
smoother load curve than the previous test.

![Load Model With Ramping Users](/img/load-model-ramping.png)
