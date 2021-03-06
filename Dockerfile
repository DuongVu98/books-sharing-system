FROM node:carbon-alpine
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD npm run start:deploy