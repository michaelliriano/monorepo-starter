echo --------- Deploying Project ---------

echo --------- Pre Cleanup ---------
docker system prune --force

echo --------- Starting build ---------
docker-compose build

echo --------- Remove old build ---------
docker-compose down

echo --------- Deploy new build ---------
docker-compose up -d

echo --------- Post Cleanup ---------
docker volume prune --force
docker image prune --force

echo --------- Site is Deployed ---------

