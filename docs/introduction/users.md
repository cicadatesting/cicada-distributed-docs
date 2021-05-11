---
sidebar_position: 3
title: Users
---

In Cicada, a `User` is the smallest unit of testing. You can think of a user as
the behavior of a single client accessing your site. Let's take a look at our
example function:

```python
@scenario(engine)
def my_first_test(context):
    assert 2 + 2 == 4

    return "Passed!"
```

During a test, Cicada will create a container for each user which will run the
function `my_first_test` inside of a `User Loop`. In this case, a user will
check that 2 + 2 = 4.

## User Loop

The user loop is responsible for calling the test function in a user container
and sending back results.

By default, the User Loop will only run the function if it has `work`. Work is
used to divide iterations across the pool of users running for a particular
scenario. If a user does not have work, it will wait until work is available or
until is is shut down by its parent scenario. This is effectively how the
default loop works:

```python
def while_has_work(user_commands: UserCommands, context: dict):
    while True:
        if user_commands.has_work():
            my_first_test(context)
            # report output, exception, logs, time taken
```

In some cases, it may be useful to override the user loop. This pseudocode
illustrates running the user so it keeps making requests until it is shut down
without waiting for work:

```python
from cicadad.core.decorators import scenario
...

def while_has_work(user_commands: UserCommands, context: dict):
    while True:
        my_first_test(context)
        # report output, exception, logs, time taken

@scenario(engine)
@user_loop(while_has_work)
def my_first_test(context):
    assert 2 + 2 == 4

    return "Passed!"

...
```

:::tip

This type of user loop is built-in at `cicadad.core.scenario.while_alive`. Don't
write your own version of this!

:::

## UserCommands

You may have noticed that the User Loop is provided with an argument called
`UserCommands`. This is a class available to the user to interact with the test.
It has the following primary functions:

- Checking for work
- Running the test function
- Sending results to the parent scenario

See [UserCommands](../reference/user-commands) for more information.

## Context

Also available to a User is the `Context`. This is a dictionary containing all
the results of previous run scenarios. This is the basic structure of the
context object:

```python
{
    "scenario_a": {
        "id": ...,
        "output": ...,
        "exception": ...,
        "logs": ...,
        "time_taken": ...,
        "timestamp": ...
    },
    "scenario_b": ...
}
```

Organizing scenarios to run before others can be done by marking them with the
`@dependency` [decorator](../reference/decorators#dependency).
