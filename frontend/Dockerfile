FROM node:14.12.0 as builder
WORKDIR /var/jenkins/workspace/front/frontend
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
FROM nginx

EXPOSE 3000


COPY --from=builder /var/jenkins/workspace/front/frontend/build /usr/share/nginx/html



CMD ["nginx", "-g","daemon off;"]
