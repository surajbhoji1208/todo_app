#specify node version and image
FROM node:16.20.0 AS development 

#specify working directory
WORKDIR /suraj/src/app/

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm ci 
RUN npm run build

EXPOSE 3000

FROM node:16.20.0 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /suraj/src/app

COPY --from=development /suraj/src/app .

EXPOSE 3000

CMD ["node","dist/main"]