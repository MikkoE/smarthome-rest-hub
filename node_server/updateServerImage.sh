echo "start building the server"
docker-compose build

echo "tgging the docker image"
docker tag node_server_smarthome-rest-hub mikkoe/smarthome-rest-hub:latest

echo "pushing image to docker hub"
docker push mikkoe/smarthome-rest-hub