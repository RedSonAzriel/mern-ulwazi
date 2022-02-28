#Build a Docker image and verify that it works locally.

cd greppo-demo/

## build image with the tag `greppo-ws`.
docker build -t greppo-ws .  

## list the images to check if it was built.
docker images 

## Run docker image locally

## start greppo with the built image,
docker run --publish 8080:8080 greppo-ws  
expose port 8080.

#At this point we should be able to hit 0.0.0.0:8080 and interact with your app.
