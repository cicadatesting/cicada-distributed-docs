---
id: load-models
title: Load Models
---

## N Iterations

```python
from cicadad.core.scenario import n_iterations
```

Makes user group run test function a limited number of times.

```python
def n_iterations(
    iterations: int,
    users: int,
    wait_period: int = 1,
    timeout: Optional[int] = 15,
    skip_scaledown: bool = False,
):
    """Creates a load model where a pool of users is called n times

    Args:
        iterations (int): Number of shared iterations for users to run
        users (int): Size of user pool
        wait_period (int, optional): Time in seconds to between polling for results. Defaults to 1.
        timeout (Optional[int], optional): Time in seconds for scenario to complete before failing. Defaults to 15.
        skip_scaledown (bool): Skip scaledown of users after running load function
    """
```

## Run Scenario Once

```python
from cicadad.core.scenario import run_scenario_once
```

Runs the scenario with one user only one time. This load model is enabled by
default.

```python
def run_scenario_once(wait_period: int = 1, timeout: Optional[int] = 15):
    """Runs scenario one time with one user

    Args:
        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.
        timeout (int, optional): Time in seconds to wait for scenario to complete before failing. Defaults to 15.

    Returns:
        Callable: Closure for configured load model
```

## N Seconds

```python
from cicadad.core.scenario import n_seconds
```

Runs user group for a specified duration.

```python
def n_seconds(
    seconds: int,
    users: int,
    wait_period: int = 1,
    skip_scaledown=False,
):
    """Run the scenario for a specified duration. Should be used with the
    'while_alive' user loop

    Args:
        seconds (int): Number of seconds to run scenario
        users (int): Number of users to start for scenario
        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.
        skip_scaledown (bool): Skip scaledown of users after running load function
    """
```

## N Users Ramping

```python
from cicadad.core.scenario import n_users_ramping
```

Scales to specified number of users over time.

```python
def n_users_ramping(
    seconds: int,
    target_users: int,
    wait_period: int = 1,
    skip_scaledown: bool = True,
):
    """Scale users to target over the duration of the time specified. Use this
    to scale users smoothly.

    Args:
        seconds (int): Amount of time to spend ramping users
        target_users (int): Number of users to ramp to.
        wait_period (int, optional): Time in seconds to wait between scaling batch of users. Defaults to 1.
        skip_scaledown (bool, optional): Do not scale down users after load model completes. Defaults to True.
    """
```

## Ramp Users To Threshold

```python
from cicadad.core.scenario import ramp_users_to_threshold
```

Gradually increases number of users until a threshold is met.

```python
def ramp_users_to_threshold(
    initial_users: int,
    threshold_fn: Callable[[Any], bool],
    next_users_fn: Callable[[int], int] = lambda n: n + 10,
    update_aggregate: Callable[[int, Any], Any] = lambda n, agg: f"Users: {n}",
    period_duration: int = 30,
    period_limit: Optional[int] = None,
    wait_period: int = 1,
    skip_scaledown: bool = False,
):
    """Increase number of users in scenario until a threshold based on the
    aggregated results is reached. Update aggregate with number of users determined
    by scenario.

    Args:
        initial_users (int): Users to start stage with.
        threshold_fn (Callable[[Any], bool]): Checks aggregate and returns True if threshold reached.
        next_users_fn (Callable[[int], int]): Scale number of users given current number of users.
        update_aggregate (Callable[[int, Any], Any], optional): Update scenario aggregate with result of load model.
        period_duration (int, optional): Time in seconds to wait before scaling test. Defaults to 30.
        period_limit (Optional[int], optional): Amount of scaling events before stopping stage. Defaults to None.
        wait_period (int, optional): Time in seconds to wait before polling for results. Defaults to 1.
        skip_scaledown (bool): Skip scaledown of users after running load function
    """
```
