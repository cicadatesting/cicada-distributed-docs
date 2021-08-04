---
id: scenario-commands
title: ScenarioCommands
---

ScenarioCommands is a class available to load models in order to interact with
the users during a scenario.

```python
from datetime import datetime, timedelta
import time

from cicadad.core.engine import Engine
from cicadad.core.decorators import (
    scenario,
    load_model,
    ScenarioCommands
)

engine = Engine()

def custom_load_model(scenario_commands: ScenarioCommands, context: dict):
    scenario_commands.scale_users(50)

    start_time = datetime.now()

    while datetime.now() < start_time + timedelta(seconds=30):
        latest_results = scenario_commands.get_latest_results()

        scenario_commands.aggregate_results(latest_results)
        scenario_commands.verify_results(latest_results)
        time.sleep(1)

    scenario_commands.scale_users(0)

@scenario(engine)
@load_model(custom_load_model)
def an_example_test(context):
    do_something()
```

## Scale Users

Update the number of running users during the scenario.

```python
scenario_commands.scale_users(self, n: int):
    """Change number of running users

    Args:
        n (int): Desired number of users
    """
```

## Start Users

Increase the number of running users in the scenario.

```python
scenario_commands.start_users(self, n: int):
    """Start users for scenario

    Args:
        n (int): Number of users to start
    """
```

## Stop Users

Decrease the number of running users in the scenario.

```python
scenario_commands.stop_users(self, n: int):
    """Stop a given number of users

    Args:
        n (int): Number of users to stop
    """
```

## Add Work

Increase the amount of work across the user pool in the scenario.

```python
scenario_commands.add_work(self, n: int):
    """Distribute work to all users in scenario

    Args:
        n (int): Amount of work to distribute across user pool
    """
```

## Send User Events

Sends an event to all users currently running in scenario

```python
scenario_commands.send_user_events(self, kind: str, payload: dict):
    """Send an event to all user in the user pool.

    Args:
        kind (str): Type of event
        payload (dict): JSON dict to send to user
    """
```

## Get Latest Results

Gathers results from users.

```python
scenario_commands.get_latest_results(
    self,
    timeout_ms=1000,
    max_results=500,
):
    """Gathers results produced by users

    Args:
        timeout_ms (int, optional): Time to wait for results. Defaults to 1000.
        max_results (int, optional): Max amount of results to return. Defaults to 500.

    Returns:
        List[Result]: List of latest results collected
    """
```

## Aggregate Results

Call this function to run the scenario's result aggregator against a list of new
results.

```python
scenario_commands.aggregate_results(self, latest_results: List[Result]) -> Any:
    """Run scenario aggregator function against latest gathered results and
    save aggregate

    Args:
        latest_results (List[Result]): Results to run aggregator function on

    Returns:
        Any: Result of scenario aggregator function
    """
```

## Verify Results

Call this function to run the scenario's result verifier against a list of new
results.

```python
scenario_commands.verify_results(self, latest_results: List[Result]) -> Optional[List[str]]:
    """Run scenario result verification function against latest results

    Args:
        latest_results (List[Result]): Last results to be collected

    Returns:
        Optional[List[str]]: List of error strings gathered for scenario
    """
```
