---
id: kubernetes
title: Running tests on Kubernetes
sidebar_position: 4
---

Cicada's scalability comes from its ability to run tests in a clustered
environment like Kubernetes. In this guide, we'll convert our app to run in K8s
and perform tests against it . We'll also use k3d to emulate a cluster locally.

## Creating a local cluster

In this example, we'll use [k3d](https://k3d.io/), which is a lightweight
version of Kubernetes designed to run locally in Docker containers. Once you
have `k3d` installed, setup a cluster with two node ports exposed. These will be
used to connect to Cicada services through the CLI.

```bash
k3d cluster create -p "8283:30083@server[0]" -p "8284:30084@server[0]"
```

Since this will be running on k3d, we will have to modify the chart a bit in
order to use this locally. We can use
[Kustomize](https://kubectl.docs.kubernetes.io/installation/kustomize/) to
apply an overlay on top of the normal cicada-distributed installation. This may
be included with your version of `kubectl` by default.

First, save the chart to a file called `cicada-distributed-overlay/cicada.yaml`:

```bash
mkdir cicada-distributed-overlay
cicada-distributed --debug start-cluster --mode=KUBE > cicada-distributed-overlay/cicada.yaml
```

Next, add a patch to use the k3d NodePorts instead of the default services
(`cicada-distributed-overlay/patch.yaml`):

```yaml
apiVersion: v1
kind: Service
metadata:
  name: cicada-distributed-datastore-client
spec:
  ports:
  - port: 8283
    protocol: TCP
    targetPort: 8283
    nodePort: 30083
  type: NodePort
---
apiVersion: v1
kind: Service
metadata:
  name: cicada-distributed-container-service
spec:
  ports:
  - port: 8284
    protocol: TCP
    targetPort: 8284
    nodePort: 30084
  type: NodePort
```

Finally, add a file called `cicada-distributed-overlay/kustomization.yaml` to
specify how to apply the overlay:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - cicada.yaml
patchesStrategicMerge:
  - patch.yaml
```

Run the following command to install it into the cluster:

```bash
kubectl apply -k cicada-distributed-overlay
```

## Deploying an example service

In the [Integration testing guide](integration-test#creating-the-app), we
created a simple Python API that ran in Docker Compose. Now, we will get it
running in our Kubernetes cluster. Because we are running in `k3d` and not
Docker Compose, we need to build Docker images manually:

```bash
docker build -t cicadatesting/demo-api-app:local .
docker build -t cicadatesting/demo-api-flyway:local -f flyway.dockerfile .
```

After building the images, import them into the `k3d` cluster:

```bash
k3d image import cicadatesting/demo-api-app:local
k3d image import cicadatesting/demo-api-flyway:local
```

Next, we can install the app into the cluster. To do this, run:

```bash
kubectl apply -f kube-app.yaml
```

Finally, run `kubectl get pods`. You should see the app and database alongside
the Cicada pods.

## Running the tests

Once an example app is running, we can run Cicada tests against it. Navigate to
the [integration-tests](https://github.com/cicadatesting/cicada-distributed-demos/tree/main/rest-api/integration-tests)
directory. Like with the example app, we need to build and import the test to
the cluster. To build, run:

```bash
docker build -t cicadatesting/cicada-distributed-demo-integration-test:local .
```

Next, import the image with:

```bash
k3d image import cicadatesting/cicada-distributed-demo-integration-test:local
```

Finally, start the test by running:

```bash
cicada-distributed --debug run --mode=KUBE --image=cicadatesting/cicada-distributed-demo-integration-test:local
```

You should see the test spin up and execute the 4 test scenarios.
