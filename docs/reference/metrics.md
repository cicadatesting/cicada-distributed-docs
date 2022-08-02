---
id: backend-console-metrics
title: Backend and Console Metrics
---

## Console Collector

Sends list of floats gathered by collector function to backend.

```python
ConsoleCollectorFn = Callable[[List[Result]], Iterable[float]]

def console_collector(name: str, collector: ConsoleCollectorFn):
    """Send metric created by collector function to backend.

    Helper for scenarios that want to leverage the backend to store metrics.

    Args:
        name (str): Name of metric
        collector (ConsoleCollectorFn): Function to convert results to list of metric values
    """
```

### Example

```python
...
from cicadad.core.decorators import metrics_collector
from cicadad.metrics.console import console_collector


def runtime_ms(latest_results: List[Result]):
    return [result.output * 1000 for result in latest_results]

@scenario(engine)
@metrics_collector(console_collector("ms", runtime_ms))
...
def post_user():
    ...
```

## Console Stats

```python
def console_stats(metric_name: str):
    """Get stats for metric values from datastore.

    * Min
    * Median
    * Max
    * Average
    * Len (Number of results for this metric)

    Args:
        metric_name (str): Name of saved metric
    """
```

### Example

```python
...
from cicadad.core.decorators import console_metric_displays
from cicadad.metrics.console import console_stats, console_percent
...

@scenario(engine)
@metrics_collector(console_collector("ms", runtime_ms))
@console_metric_displays(
    {
        "latency_stats": console_stats("ms"),
        "latency_above_30ms": console_percent("ms", 30),
    }
)
...
def post_user(context):
    ...
```

## Console Count

```python
def console_count(metric_name: str):
    """Get total of all values for a metric in datastore.

    Args:
        metric_name (str): Name of saved metric
    """
```

## Console Latest

```python
def console_latest(metric_name: str):
    """Get latest value of metric from datastore.

    Args:
        metric_name (str): Name of saved metric
    """
```

## Console Percent

```python
def console_percent(metric_name: str, split_point: float):
    """Get percent of values for a metric above split point from datastore.

    Args:
        metric_name (str): Name of saved metric
        split_point (float): Point to split metric values at
    """
```
