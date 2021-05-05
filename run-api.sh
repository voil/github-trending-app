git clone https://github.com/huchenme/github-trending-api.git api
cd api
docker build -t github-trending-api .
docker run -d --rm -p 8000:8888 github-trending-api:latest