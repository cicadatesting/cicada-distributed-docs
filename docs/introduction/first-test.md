---
sidebar_position: 2
id: first-test
title: Writing Your First Test
---

## Creating a project

The easiest way to create a Cicada project is through the CLI.

```bash
cicada-distributed init .
```

This will create a basic `Dockerfile` and a `test.py` file in the current
directory.

## Project Overview

* `Dockerfile` - This is used by Cicada to add tests to an image and specify
the entrypoint for tests.
* `test.py` - This file is boilerplate for writing tests and linking them to an
`Engine`. This file is also executed as the entrypoint for tests.

## Adding a test

In `test.py`, you'll find a basic test that checks that 2 + 2 is equal to 4.
Let's change it so it does something more interesting.

First, update the `Dockerfile` so it installs the `requests` library:

```Dockerfile {3}
FROM cicadatesting/cicada-distributed-base-image:latest

RUN pip install requests

COPY . .

ENTRYPOINT ["python", "-u", "test.py"]
```

Next, update `test.py` so it makes a call to the Google homepage and checks the
status code:

```python {3,10-12}
from cicadad.core.decorators import scenario
from cicadad.core.engine import Engine
import requests

engine = Engine()


@scenario(engine)
def my_first_test(context):
    response = requests.get("https://www.google.com")

    assert response.status_code == 200


if __name__ == "__main__":
    engine.start()
```

## Starting the cluster

Before anything runs, ensure that the cluster has been started on your machine:

```bash
cicada-distributed start-cluster
```

This will start the following containers:

* Redis - Used as a storage backend
* Datastore Service - Client to connect with storage backend
* Container Service - Starts and stops users and scenarios

Run a `docker ps` to ensure those containers are running

```bash
CONTAINER ID   IMAGE                                                       COMMAND                  CREATED       STATUS       PORTS                                       NAMES
c3f361bb4f39   cicadatesting/cicada-distributed-container-service:latest   "/app/main"              4 hours ago   Up 4 hours   0.0.0.0:8284->8284/tcp, :::8284->8284/tcp   cicada-distributed-container-service
c1e17422ecb8   cicadatesting/cicada-distributed-datastore-client:latest    "/app/main"              4 hours ago   Up 4 hours   0.0.0.0:8283->8283/tcp, :::8283->8283/tcp   cicada-distributed-datastore-client
bcd38f7eaaf3   redis:6                                                     "docker-entrypoint.s…"   4 hours ago   Up 4 hours   0.0.0.0:6379->6379/tcp, :::6379->6379/tcp   cicada-distributed-redis
```

## Running tests

Finally, it's time to run our tests! In the current directory, run:

```bash
cicada-distributed run
```

This will package the tests into the `Dockerfile` and build the image. It will
then start a test container to run the scenarios attached to the `Engine` and
stream back the results.

Viola! The test should complete successfully.

## Stopping the cluster

To clean up the cluster, simply run:

```bash
cicada-distributed stop-cluster
```
