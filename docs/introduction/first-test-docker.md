---
sidebar_position: 3
id: first-test-docker
title: Writing Your First Test (In Docker)
---

## Creating a test for Docker

In Docker mode, you'll need to create a `Dockerfile` in addition to your test.
You can generate a working sample test and Dockerfile through the CLI:

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

Before anything runs, ensure that the backend is running in Docker:

```bash
cicada-distributed start-cluster
```

This will start a `backend` in a container which is used to offload some of the
heavy lifting from Python.

Run a `docker ps` to ensure any requisite containers are running

## Running tests

Finally, it's time to run our tests! In the current directory, run:

```bash
cicada-distributed run --mode DOCKER
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
