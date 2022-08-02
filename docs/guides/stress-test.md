---
id: stress-test
title: Writing Stress Tests
sidebar_position: 3
---

Cicada's ultimate goal is to answer this question: At what point does my system
break. In [this tutorial](https://github.com/cicadatesting/cicada-distributed-demos/tree/main/rest-api/stress-test),
we'll discover how to use Cicada's powerful scaling features to push the
[demo API](integration-test#creating-the-app) to it's limit.

## Creating the Test

The key to this test is the built-in load model `ramp_users_to_threshold`. This
will allow the scenario to continue adding users until a certain limit is
reached. To keep this test short, the limit will be when the average response
time reaches 100ms.

### Adding an Aggregator

Before we start, we need a function to aggregate runtimes from the users. The
threshold function will look at the aggregate of user results to determine if
it has reached the threshold or not.

```python {8-37}
...
from cicadad.core.decorators import (
    scenario,
    result_aggregator
)
...

def runtime_aggregator(previous_aggregate, latest_results):
    if previous_aggregate is None:
        num_results = 0
        mean_ms = 0
    else:
        num_results = previous_aggregate["num_results"]
        mean_ms = previous_aggregate["mean_ms"]

    runtimes = []

    for result in latest_results:
        if result.exception is None:
            runtimes.append(result.output)

    if runtimes != []:
        latest_num_results = len(runtimes)
        latest_mean_ms = statistics.mean(runtimes)

        new_num_results = num_results + latest_num_results
        new_mean = (
            (mean_ms * num_results) + (latest_mean_ms * latest_num_results)
        ) / (num_results + latest_num_results)
    else:
        new_num_results = num_results
        new_mean = mean_ms

    return {
        "num_results": new_num_results,
        "mean_ms": new_mean,
    }

@scenario(engine)
@result_aggregator(runtime_aggregator)
def post_user(context):
    start = datetime.now()

    requests.post(
        url="http://demo-api:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    end = datetime.now()

    return ((end - start).seconds + (end - start).microseconds / 1000000) * 1000
```

This aggregator will find the mean duration of the latest results and combine it
with the mean of all the previous results.

## Adding the Load Model

Next, add the `ramp_users_to_threshold` load model. The load model function will
start with `10` users and add `5` users every scale up period. Finally, it will
check the aggregate if it has gone over `100 ms`.

```python
...
from cicadad.core.decorators import (
    scenario,
    load_model,
    user_loop,
    result_aggregator
)
from cicadad.core.scenario import ramp_users_to_threshold, while_alive
...

@scenario(engine)
@load_model(
    ramp_users_to_threshold(
        initial_users=10,
        threshold_fn=lambda agg: agg is not None and agg["mean_ms"] > 100,
        next_users_fn=lambda n: n + 5,
    )
)
@user_loop(while_alive())
@result_aggregator(runtime_aggregator)
def post_user(context):
    start = datetime.now()

    requests.post(
        url="http://demo-api:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    end = datetime.now()

    return ((end - start).seconds + (end - start).microseconds / 1000000) * 1000
```

Run the test `cicada-distributed run` and wait for it to complete. On the
machine this was tested on, the API was able to handle `40` users before the
average response rate went over 100 ms.
