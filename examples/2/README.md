# Example 2

This example is using a container to install nodejs dependancies of a project

To run you first have to build the docker container for this example.

The container is just the latest nodejs container but adding a working directory to it so that we have a place to mount our local development files, which in this instance is just a readme and a dockerfile but which this example will create files for us.

To build the container the following command is used:
```bash
docker build -t example-2 .
```

This will create a docker image called "example-2" which we can create containers from.
