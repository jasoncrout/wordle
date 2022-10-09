FROM node:16.14.0-alpine as server

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

WORKDIR /client

RUN npm ci

RUN npm run build

COPY . /client/build

WORKDIR /

CMD ["node", "server.js"]