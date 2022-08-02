---
sidebar_position: 2
id: first-test
title: Writing Your First Test
---

## Creating a test

To create a test, create a Python file called
[`test.py`](https://github.com/cicadatesting/cicada-distributed-demos/blob/main/first-test/test.py)
(it can be named anything though). Enter these contents:

```python
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

This will create a test that visits the Google homepage and checks for a `200`
response code.

```bash
CONTAINER ID   IMAGE                                                       COMMAND                  CREATED       STATUS       PORTS                                       NAMES
c3f361bb4f39   cicadatesting/cicada-distributed-container-service:latest   "/app/main"              4 hours ago   Up 4 hours   0.0.0.0:8284->8284/tcp, :::8284->8284/tcp   cicada-distributed-container-service
c1e17422ecb8   cicadatesting/cicada-distributed-datastore-client:latest    "/app/main"              4 hours ago   Up 4 hours   0.0.0.0:8283->8283/tcp, :::8283->8283/tcp   cicada-distributed-datastore-client
bcd38f7eaaf3   redis:6                                                     "docker-entrypoint.s…"   4 hours ago   Up 4 hours   0.0.0.0:6379->6379/tcp, :::6379->6379/tcp   cicada-distributed-redis
```

## Running tests

Next, you can run your test locally via the command line. In the directory
containing the test, run:

```bash
cicada-distributed run
```

This will start a local backend (assuming you have downloaded it with the
`start-cluster` command) and launch test processes on your machine. Once the
test completes, you should an output like this in your console:

```bash
========================= Test Complete =========================

Passed:

* my_first_test

====================== 1 passed, 0 failed =======================

--------------------- my_first_test: Passed ---------------------

Time Taken: 2.018773 Seconds
Succeeded: 1 Loop(s)
Failed: 0 Loop(s)
Metrics:
                      my_first_test metrics
 ───────────────────────────────────────────────────────────────
  name                 value
 ───────────────────────────────────────────────────────────────
  runtimes             Min: 0.118, Median: 0.118, Average:
                       0.118, Max: 0.118, Len: 1
  results_per_second
  success_rate         100.0
 ───────────────────────────────────────────────────────────────
```

This will show you that the test passed in 2 seconds, with the runtime of the
user taking approximately 118 ms.
