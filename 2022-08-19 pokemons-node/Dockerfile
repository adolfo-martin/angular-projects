FROM node:17.1.0-alpine3.14

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./backend/. .

EXPOSE 80

CMD node ./app.js

# docker build -t ws-node-pokemons:0.8 .
# docker tag ws-node-pokemons:0.8 adomargon/ws-node-pokemons:0.8
# docker push adomargon/ws-node-pokemons:0.8