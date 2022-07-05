# Stage 1
FROM node:14 as build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]
# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD nginx -g 'daemon off;'