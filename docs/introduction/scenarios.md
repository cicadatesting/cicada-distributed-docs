---
sidebar_position: 4
title: Scenarios
---

In Cicada, tests are organized into `Scenarios` to describe how they are run.
A scenario's `Load Model` is responsible for managing `Users` and administering
`work` to users if necessary. Effectively, a single test is a `Scenario` with
one or more `Users`

## Load Model

Let's take a look at the example test:

```python
@scenario(engine)
def my_first_test(context):
    assert 2 + 2 == 4

    return "Passed!"
```

By default the scenario when run will start 1 `user` and have it run 1 time.
Here is the pseudocode for how that basic load model would work:

```python
def run_once(scenario_commands: ScenarioCommands, context: dict):
    scenario_commands.scale_users(1)
    scenario_commands.add_work(1)

    latest_results = []

    while latest_results == []:
        latest_results = scenario_commands.get_latest_results()

        time.sleep(1)

    scenario_commands.aggregate_results(latest_results)
    scenario_commands.verify_results(latest_results)

    scenario_commands.scale_users(0)
```

We can override that by specifying a different load model:

```python {1,2,5}
from cicadad.core.decorators import load_model
...

def n_iterations(iterations: int, users: int):
    def closure(scenario_commands: ScenarioCommands, context: dict):
        scenario_commands.scale_users(users)
        scenario_commands.add_work(iterations)

        results = []

        while len(results) < iterations:
            latest_results = scenario_commands.get_latest_results()

            scenario_commands.aggregate_results(latest_results)
            scenario_commands.verify_results(latest_results)

            results.extend(latest_results)
            time.sleep(1)

        scenario_commands.scale_users(0)

    return closure

@scenario(engine)
@load_model(n_iterations(100, 10))
def my_first_test(context):
    assert 2 + 2 == 4

    return "Passed!"
```

This creates a load model to run 10 users a shared total of 100 times until
completion.

:::tip

This type of load model is built-in at `cicadad.core.scenario.n_iterations`.
Don't write your own version of this!

:::

## Scenario Commands

You may have noticed the argument for `ScenarioCommands` passed to the load
model. This class is used to provide an interface for managing users during a
scenario. It has the following features:

- Scale Users - Change the number of running users.
- Start Users - Increase the number of running users.
- Stop Users - Decrease the number of running users.
- Add Work - Increase the number of iterations for the user pool to run.
- Get Latest Results - Retrieve the latest results posted by the user pool.
- Aggregate Results - Save an aggregated result based on the current aggregate
  and latest results to the scenario.
- Verify Results - Check the latest results and return error strings if errors
  among them are found.

<!-- ## Verifying Results -->

<!-- ## Aggregating Results -->
