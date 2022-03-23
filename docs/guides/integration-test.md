---
id: integration-test
title: Writing Integration Tests
sidebar_position: 1
---

Cicada was originally created to run integration tests against a running version
of your code. In this guide, we'll build integration tests to make requests on
a simple API.

## Creating the App

First, clone the app from `cicada-distributed-demos` and navigate to the `rest-api`

```bash
git clone https://github.com/cicadatesting/cicada-distributed-demos.git
cd rest-api/app
```

<!-- FEATURE: may be useful to have a deployed version of the sample app -->

In `app.py`, you'll notice the code for 2 endpoints:

```python
...

@app.post("/users/")
async def create_user(user: User):
    with engine.connect() as connection:
        try:
            result = connection.execute(
                "INSERT INTO users (name, age, email) VALUES (%s, %s, %s)",
                user.name,
                user.age,
                user.email,
            )

            return {"id": result.lastrowid}
        except IntegrityError:
            raise HTTPException(
                status_code=400, detail=f"Email {user.email} already taken"
            )


@app.get("/users/{user_id}")
async def get_user_by_id(user_id):
    with engine.connect() as connection:
        users = list(connection.execute("SELECT * FROM users WHERE id=%s", user_id))

        if users == []:
            raise HTTPException(status_code=404, detail=f"User {user_id} not found")

        return users[0]
```

To test this, we'll want to verify 4 things:

- Create User
- Create User with already taken email
- Get User
- Get User (not found)

## Creating the Test

To begin, create an integration test script:

```bash
mkdir integration-tests
cd integration-tests
cicada-distributed init .
```

Before we start, we should update the `Dockerfile` to include the `requests`
package so we can make HTTP requests to the API

```Dockerfile {3}
FROM cicadatesting/cicada-distributed-base-image:latest

RUN pip install requests

COPY . .

ENTRYPOINT ["python", "-u", "test.py"]
```

### Post User

Next, open `test.py` and make a scenario to create a user:

```python
...
import requests

@scenario(engine)
def post_user(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": f"{str(uuid.uuid4())[:8]}@gmail.com",
        },
    )

    assert response.status_code == 200
```

This scenario will make a POST request to the API and create a user with a
random email address.

:::caution

If running this in Docker, it may be applicable to hit localhost through Docker
(like `172.17.0.1` or `host.docker.internal`), or hit the API through the docker
network (the demo uses `demo-api`). You can override the network with
the flag `cicada-distribtued run --network {network}`.

:::

### Post User With Duplicate Email

We should also test that users with the same email as another user fail. To do
this, modify `post_user` to return the email created and create another scenario
to use that same email in a request:

```python {6,13,21-33}
from cicadad.core.decorators import dependency
...

@scenario(engine)
def post_user(context):
    email = f"{str(uuid.uuid4())[:8]}@gmail.com"

    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": email,
        },
    )

    assert response.status_code == 200
    return email


@scenario(engine)
@dependency(post_user)
def post_user_duplicate_email(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": context["post_user"]["output"],
        },
    )

    assert response.status_code == 400
```

This scenario will make sure that a `400` response is returned when trying to
create a user with the same email.

### Get User

In order to test the endpoint for retrieving a user, we will need the ID from
the first scenario. We can modify it to return the ID as well as the email, and
use it in `get_user` scenario.

```python {15-20,31,42}
@scenario(engine)
def post_user(context):
    email = f"{str(uuid.uuid4())[:8]}@gmail.com"

    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": email,
        },
    )

    assert response.status_code == 200
    body = response.json()

    return {
        "email": email,
        "id": body["id"]
    }


@scenario(engine)
@dependency(post_user)
def post_user_duplicate_email(context):
    response = requests.post(
        url="http://localhost:8080/users",
        json={
            "name": "jeremy",
            "age": 23,
            "email": context["post_user"]["output"]["email"],
        },
    )

    assert response.status_code == 400


@scenario(engine)
@dependency(post_user)
def get_user(context):
    response = requests.get(
        url=f"http://localhost:8080/users/{context['post_user']['output']['id']}",
    )

    assert response.status_code == 200
```

### Get User With Invalid ID

Finally, we need to test that requests for users where the ID does not exist
fail. Create a test that will use `0` as the ID for the GET users endpoint:

```python
@scenario(engine)
def get_user_not_found(context):
    response = requests.get(
        url="http://localhost:8080/users/0",
    )

    assert response.status_code == 404
```

## Running the Test

Once all 4 scenarios have been created, we can run the test. To run, enter:

```bash
cicada-distributed run
```

You should see the scenarios complete. Congratulations! You've tested a real API
with Cicada.
