---
id: user-commands
title: UserCommands
---

UserCommands is a class provided to the user loop to interact with the scenario.

## Has Work

Check if the user has work to determine if it should run or not.

```python
user_commands.has_work(self, timeout_ms: int = 1000):
    """Check if user has remaining invocations

    Args:
        timeout_ms (int, optional): Time to wait for work event to appear before returning. Defaults to 1000.

    Returns:
        bool: User has work
    """
```

## Run

Run the scenario function with provided arguments.

```python
user_commands.run(self, *args, log_traceback=True, **kwargs):
    """Run scenario function with arguments; capture exception and logs

    Args:
        log_traceback (bool, optional): Print out traceback for exception. Defaults to True.

    Returns:
        Tuple[Any, Exception, str]: Output, exception, and logs captured
    """
```

## Report Result

Send the output and exception back to the scenario.

```python
user_commands.report_result(
    self, output: Any, exception: Any, logs: Optional[str], time_taken: int
):
    """Report result for scenario invocation from user to scenario

    Args:
        output (Any): Function output
        exception (Any): Function exception
        logs (Optional[str]): Function logs
        time_taken (int): Time taken in seconds to call function once
    """
```
