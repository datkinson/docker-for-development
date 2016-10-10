# Example 3

This example is using a container to run the nodejs application and serve it on a port

To run you first have to build the docker container for this example.

To build the container the following command is used:
```bash
docker build -t example-3 .
```

This will create a docker image called "example-3" which we can create containers from.

To run this container we are going to add an additional argument fromt he previous examples.

We will need to map a network port to the container so that we have a way in to be able to see the content.  Each container acts as its own machine in a way and has its own address.

```bash
docker run --rm -it -v `pwd`:/src -p 3000:3000 example-3 npm start
```

The argument we added here is: ```-p 3000:3000``` and this is mapping our local machines port 3000 to the docker containers port 3000 so that we can pass through and access the web server being run by this application.

We can also change which local port is being mapped to the containers port by changing the left of the argument to port 80 for example:

```-p 80:3000```

This will allow us to access the web server in our browser by just going to http://localhost rather than having to specify the port on the url as well.
