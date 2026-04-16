# docker login -u adomargon docker.io
# docker build -t adomargon/node-countries:1.0 .
# docker push adomargon/node-countries:1.0

FROM node:17.1.0-alpine3.14

LABEL maintainer="adolfo.martin@iesramonarcas.es"
LABEL version="1.0"

RUN mkdir -p /opt/app

# WORKDIR /opt/app/backend

# COPY package.json .
# RUN npm install --quiet

WORKDIR /opt/app
COPY . .

EXPOSE 80
CMD node ./backend/app.js