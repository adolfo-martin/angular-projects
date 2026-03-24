FROM node:current-alpine3.17
WORKDIR /home/node
COPY ./backend/. .
RUN npm install
EXPOSE 8081
ENTRYPOINT ["node", "./app.js"]


# ENV NODE_VERSION=19.3.0
# docker pull node:current-alpine3.17
# /home/node


# docker build -t node-authentication:1.2 .
# docker tag node-authentication:1.2 adomargon/node-authentication:1.2
# docker push adomargon/node-authentication:1.2
