---
id: user-loops
title: User Loops
---

## While Has Work

```python
from cicadad.core.scenario import while_has_work
```

Runs the user only if it has available work. Otherwise, the user will wait for
work.

```python
def while_has_work(polling_timeout_ms: int = 1000):
    """Run user if work is available or continue polling

    Args:
        polling_timeout_ms (UserCommands): Time to wait for work before cycling
    """
```

## While Alive

```python
from cicadad.core.scenario import while_has_work
```

Runs the user an unlimited number of times until it is shut down by the load
model.

```python
def while_alive():
    """Run user if hasn't been shut down yet

    Args:
        polling_timeout_ms (UserCommands): Time to wait for work before cycling
    """
```

## Iterations Per Second Limited

```python
from cicadad.core.scenario import while_has_work
```

Runs the user loop up to the limit specified every second.

```python
def iterations_per_second_limited(limit: int):
    """Allows a user to run a limited number of iterations per second

    Args:
        limit (int): Max iterations per second for user
    """
```
