FROM node:lts-bookworm
RUN mkdir -p /app/src
WORKDIR /app
COPY backend/package.json .
RUN npm install
WORKDIR /app/src
COPY ./backend/src .
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]

# docker build -t hardware-solutions-server-rest:0.8 .

# docker run -dit --name backend-rest -p 3000:3000 hardware-solutions-server-rest:0.8