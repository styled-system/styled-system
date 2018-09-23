FROM node:10-alpine

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .
RUN npm run docs && mv site /public
COPY docs/logo.png docs/logo.svg /public/
