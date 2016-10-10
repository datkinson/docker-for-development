# Example 1

This example is a very simple initialising of a new nodejs project

To run you first have to build the docker container for this example.

The container is just the latest nodejs container but adding a working directory to it so that we have a place to mount our local development files, which in this instance is just a readme and a dockerfile but which this example will create files for us.

To build the container the following command is used:
```bash
docker build -t example-1 .
```

This will create a docker image called "example-1" which we can create containers from.

We dont have nodejs or npm installed on this example system to prove the demonstration works.

Now we will use the ```npm init``` command to create ourselves a package.json file in the current working directory.  There are a few components to this:

```bash
docker run --rm -it -v `pwd`:/src example-1 npm init
```

Let's break this down.

```docker run``` will instruct docker to run a new container based on the parameters to follow

```--rm``` This flag will make sure to fully delete the container after the command provided to it completes.  This is usefull so we dont have a bunch of containers floating around we no longer need.  We could keep it around for different purposes which will be covered in a later example.

```-it``` This will give us an ```interactive``` ```terminal``` so that we can answer questions the interactive application we are running will ask of us, in this case it is the ```npm init``` command.

```-v `pwd`:/src``` This will instruct docker to create a mounted volume from your current working directory and mount it at ```/src``` inside the container.  This will be where we generate the new node project.

```example-1``` This is the name of the Docker image we created and want to use to create a container.

```npm init``` This is the command we want to run inside the container.
