1. Build the Docker image
docker build . -t news-api-with-caching
2. Run the Docker image
docker run -p 5555:5555 -d news-api-with-caching

This will start the api on port 5555
