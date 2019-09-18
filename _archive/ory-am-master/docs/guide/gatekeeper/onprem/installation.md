# Installation

First, you need to clone the repository. Make sure that the directory name is in fact `gatekeeper-onprem`, otherwise
some tasks will fail as docker-compose relies on this directory's name.

```sh
$ git clone https://github.com/ory/gatekeeper-onprem.git
$ cd gatekeeper-onprem
```

The next command start the docker environment:

```sh
$ make up
```

Once this task is completed, it might still take a while before the whole system is up. The best indicator is
the configurator docker container. Once it's status is `Exited (0)` you are good to go to run the next commands.

```sh
$ docker ps -a | grep gatekeeperonprem_configurator_1
dbd5fbfa8c6b        gatekeeperonprem_configurator                    "./scripts/configu..."   3 minutes ago       Exited (0) 2 minutes ago                             gatekeeperonprem_configurator_1
```

## Usage