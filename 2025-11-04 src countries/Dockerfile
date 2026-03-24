FROM node:22.21.1-alpine3.21
RUN mkdir -p /app/src
WORKDIR /app/src
# COPY package.json .
# RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# docker build -t ws-countries:2.0 .
# docker tag ws-countries:2.0 adomargon/ws-countries:2.0
# docker push adomargon/ws-countries:2.0


# docker run -p 8080:3000 adomargon/ws-countries:2.0
