FROM node:14.12.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./ ./

FROM nginx

EXPOSE 3000
CMD ["nginx","-g","daemon off;"]