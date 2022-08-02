---
id: user-commands
title: UserCommands
---

UserCommands is a class provided to the user loop to interact with the scenario.

```python
from cicadad.core.engine import Engine
from cicadad.core.decorators import (
    scenario,
    user_loop,
    UserCommands
)

engine = Engine()

def custom_user_loop(user_commands: UserCommands, context: dict):
    while user_commands.is_up():
        if user_commands.has_work():
            start = datetime.now()
            output, exception, logs = user_commands.run(context=context)
            end = datetime.now()
            user_commands.report_result(
                output,
                exception,
                logs,
                time_taken=(end - start).seconds,
            )

@scenario(engine)
@user_loop(custom_user_loop)
def an_example_test(context):
    do_something()
```

## Is Up

Check if the user has been terminated by the scenario

```python
def is_up(self):
    """Check if user is still running

    Returns:
        bool: User is up
    """
```

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

## Get Events

Recieve commands from scenario for this user

```python
user_commands.get_events(self, kind: str):
    """Get events sent to user from scenario

    Returns:
        List[UserEvent]: List of user events
        kind: type of event to retrieve
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
