FROM node:16.20.0 AS development 

WORKDIR /suraj/frontend/src/app

COPY package*.json ./

COPY . .

RUN npm run build
EXPOSE 4200
