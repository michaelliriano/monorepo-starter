echo --------- Deploying Project ---------

echo --------- Starting build ---------
docker-compose build

echo --------- Update builds ---------
docker-compose down

echo --------- Finishing build ---------
docker-compose up

echo --------- Site is Deployed ---------
