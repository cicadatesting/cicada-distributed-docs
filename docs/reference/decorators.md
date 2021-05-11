---
id: decorators
title: Decorators
---

## Scenario

To mark a function as a Cicada scenario, use the scenario decorator. Remember
to attach it to the engine.

#### Example

```python
from cicadad.core.decorators import scenario
from cicadad.core.engine import Engine

engine = Engine()

@scenario(engine)
def hello_world():
    assert 2 + 2 == 4
```

<!--TODO: link to github code view instead of copy paste-->

#### API

```python
def scenario(engine: Engine, name: str = None):
    """Mark a function as a scenario

    Args:
        engine (Engine): Engine to attach scenario to
        name (str, optional): Name to give to scenario. Defaults to function name if None.
    """
```

## User Loop

Override the user loop of a scenario.

#### Example

```python
from cicadad.core.decorators import scenario, user_loop
from cicadad.core.scenario import iterations_per_second_limited
...

@scenario(engine)
@user_loop(iterations_per_second_limited(4))
def hello_world():
    assert 2 + 2 == 4
```

#### API

```python
def user_loop(user_loop_fn: UserLoopFn):
    """Function to handle how the user function is run

    Args:
        user_loop_fn (UserLoopFn): User defined user loop function
    """
```

## Load Model

Override the load model function for a scenario.

#### Example

```python
from cicadad.core.decorators import scenario, load_model
from cicadad.core.scenario import n_seconds
...


@scenario(engine)
@load_model(n_seconds(30, 10))
def hello_world():
    assert 2 + 2 == 4
```

#### API

```python
def load_model(load_model_fn: LoadModelFn):
    """Function to handle how scenario is run with regards to starting users and
    administering work

    Args:
        load_model_fn (LoadModelFn): User defined load model function
    """
```

## Dependency

Mark a scenario as dependent on another scenario passing.

#### Example

```python
from cicadad.core.decorators import scenario, dependency
...


@scenario(engine)
def test_a():
    assert 2 + 2 == 4

@scenario(engine)
@dependency(test_a)
def test_b():
    assert 3 + 3 == 6
```

#### API

```python
def dependency(dep: Scenario):
    """Set a scenario as a dependency for this scenario to run

    Args:
        dep (Scenario): Scenario this function is dependent on being successful
    """
```

## Result Aggregator

Add a function to aggregate results gathered during scenario.

#### Example

```python
from cicadad.core.decorators import scenario, result_aggregator
...

def agg(last_agg, latest_results):
    if last_agg is None:
        total = 0
    else:
        total = last_agg

    return total + sum(r.output for r in latest_results)



@scenario(engine)
@result_aggregator(agg)
def hello_world():
    assert 2 + 2 == 4

    return 1
```

#### API

```python
def result_aggregator(aggregator_fn: ResultAggregatorFn):
    """Transform previous aggregate and list of results into an aggregated
    single result. Called by load model function

    Args:
        aggregator_fn (ResultAggregatorFn): Aggregator function
    """
```

## Result Verifier

Add a function to verify results and add error strings for results gathered
during scenario.

#### Example

```python
from cicadad.core.decorators import scenario, result_verifier
...

def verifier(latest_results):
    return [
        f"* {str(result.exception)}"
        for r in latest_results
        if r.exception is not None
    ]

@scenario(engine)
@result_verifier(verifier)
def hello_world():
    assert ..., "expected x but got y"
```

#### API

```python
def result_verifier(verifier_fn: ResultVerifierFn):
    """Create error messages for errors found in a list of results. Called by
    load model function

    Args:
        verifier_fn (ResultVerifierFn): Verifier function
    """
```

## Output Transformer

Transform final aggregate to be saved as scenario output after load model
completes.

#### Example

```python
from cicadad.core.decorators import scenario, result_aggregator, output_transformer
...

def agg(last_agg, latest_results):
    if last_agg is None:
        total = 0
    else:
        total = last_agg

    return total + sum(r.output for r in latest_results)


def transform(agg):
    return f"Total: {agg}"


@scenario(engine)
@result_aggregator(agg)
@output_transformer(transform)
def hello_world():
    assert 2 + 2 == 4

    return 1
```

#### API

```python
def output_transformer(transformer_fn: OutputTransformerFn):
    """Transform the aggregated result of the scenario after load model is
    called

    Args:
        transformer_fn (OutputTransformerFn): Transformer function
    """
```

## Tag

Add a tag to scenario so it can be optionally excluded during test run.

#### Example

```python
from cicadad.core.decorators import scenario, tag
...


@scenario(engine)
@tag("foo")
def hello_world():
    assert 2 + 2 == 4
```

#### API

```python
def tag(tag: str):
    """Add a tag to a scenario. Tags allow for a test run to only cover certain
    scenarios.

    Args:
        tag (str): Tag name to add to scenario
    """
```
