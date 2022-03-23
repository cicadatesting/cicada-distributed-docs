---
sidebar_position: 1
title: Installation
id: installation
---

To get started, install Cicada through pip:

```bash
pip install cicadad
```

Depending on how you plan to run Cicada, you'll also have setup a backend on
your machine. The most basic form is the local backend. To install the backend,
run:

```bash
cicada-distributed start-cluster --mode LOCAL
```

This will download the backend executable for your operating system. Next, make
the file executable. On a 64 bit linux machine, you can give the file permissions
with the following command:

```
chmod +x /usr/local/lib/python3.8/dist-packages/cicadad/backend/backend-linux-amd64
```

More detailed guides on getting a backend running on other platforms are
available here:

* [Docker](first-test-docker#starting-the-cluster)
* [Kubernetes](../guides/kubernetes#creating-a-local-cluster)
