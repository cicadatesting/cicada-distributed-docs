---
id: metrics-guide
title: Working With Metrics
sidebar_position: 5
---

Cicada offers built in mechanisms for collecting and displaying metrics. In this
guide, we'll go over how you can generate custom metrics from a test and display
them in the console.

## Basic metrics in a load test

For this example, create a basic load test that will spin up 30 users for 3
minutes:

```python
from typing import List

from cicadad.core.engine import Engine
from cicadad.core.types import Result
from cicadad.core.decorators import (
    scenario,
    load_model,
    user_loop,
)
from cicadad.core.scenario import n_seconds, while_alive
import requests
import uuid

engine = Engine()


@scenario(engine)
@load_model(n_seconds(180, 30))
@user_loop(while_alive())
def post_user(context):
    requests.post(
        # NOTE: use demo-api for docker
        # url="http://demo-api:8080/users",
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )


if __name__ == "__main__":
    engine.start()
```

When this test runs, it will produce metrics that are built into every test
and displayed in the console:

```bash
                                   post_user metrics
 ─────────────────────────────────────────────────────────────────────────────────────
  name                 value
 ─────────────────────────────────────────────────────────────────────────────────────
  runtimes             Min: 2.041, Median: 10.01, Average: 9.62, Max: 12.166, Len: 90
  results_per_second   Min: 2.0, Median: 2.0, Average: 2.0, Max: 2.0, Len: 13
  success_rate         100.0
 ─────────────────────────────────────────────────────────────────────────────────────
```

## Metrics Collectors

Cicada uses metrics collectors to report metric information for a scenario. A
`metric_collector` is a function that takes a list of results gathered from
users and reports it to a backend. This backend can be the Cicada backend
(which is passed by default), or another metrics collection service like
Cloudwatch or Prometheus. Cicada records the following metrics in the backend
automatically:

* `runtime`: Statistics for user loop runtimes
* `pass_or_fail`: Records `1` if the user loop is successful, `0` if it fails
* `results_per_second`: The number of results collected over the time in seconds

In the case of Cicada backend statistics, the min, mean, median, average, max,
and number of results are stored for all float values recored for that metric.

## Console Metrics Displays

In addition to recording metrics, Cicada provides a way of displaying metrics
in the console through `console_metric_displays`. This is a dictionary
containing functions that can pull metrics from a source, such as the Cicada
backend (which is also passed in by default), and return a formatted string to
print out the metrics. Cicada provides a dictionary by default which can be
overridden. The following metrics are printed out and can be seen in the above
example:

* `runtimes`: Prints statistics about the `runtime` metric collected in the
backend
* `results_per_second`: Statistics about the `results_per_second` metric
* `success_rate`: The percentage of values in the `pass_or_fail` metric above
`0.5`

Definitions for the types of console metrics displays can be found [here](../reference/backend-console-metrics#console-stats)

## Example

In [this example](https://github.com/cicadatesting/cicada-distributed-demos/tree/main/rest-api/metrics-demo),
we'll replace the metrics displays to print out information about the latency of
a response.

First, edit the function to return the value for request time elapsed. This is
the time between sending the request and receiving the first headers of the
response:

```python {7,16}
...

@scenario(engine)
@load_model(n_seconds(180, 30))
@user_loop(while_alive())
def post_user(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    return response.elapsed.total_seconds()
```

Next, add a `metric_collector` that will extract the value from the response
convert it to milliseconds, and report it to the backend:

```python {2-6,10}
...
from cicadad.core.decorators import metrics_collector
from cicadad.metrics.console import console_collector

def runtime_ms(latest_results: List[Result]):
    return [result.output * 1000 for result in latest_results]

@scenario(engine)
@load_model(n_seconds(180, 30))
@metrics_collector(console_collector("ms", runtime_ms))
@user_loop(while_alive())
def post_user(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    return response.elapsed.total_seconds()
```

Finally, change the `console_metric_displays` to print out info about the
collected metric. This will display statistics as well as the amount of
responses that took over 30 ms:

```python {2-3,11-16}
...
from cicadad.core.decorators import console_metric_displays
from cicadad.metrics.console import console_stats, console_percent

def runtime_ms(latest_results: List[Result]):
    return [result.output * 1000 for result in latest_results]

@scenario(engine)
@load_model(n_seconds(180, 30))
@metrics_collector(console_collector("ms", runtime_ms))
@console_metric_displays(
    {
        "latency_stats": console_stats("ms"),
        "latency_above_30ms": console_percent("ms", 30),
    }
)
@user_loop(while_alive())
def post_user(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    return response.elapsed.total_seconds()
```

When the test finishes (`cicada-distributed run`), we should see metrics similar
to these:

```bash
                                      post_user metrics                                       
 ──────────────────────────────────────────────────────────────────────────────────────────── 
  name                 value                                                                  
 ──────────────────────────────────────────────────────────────────────────────────────────── 
  latency_stats        Min: 7.977, Median: 42.434, Average: 44.472, Max: 321.358, Len: 21255  
  latency_above_30ms   5.669                                                                  
 ────────────────────────────────────────────────────────────────────────────────────────────
```

We can see that in 3 minutes, 21255 responses were collected and 5.7% of those
came in above 30 ms.
