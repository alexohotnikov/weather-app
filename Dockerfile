FROM node:14.18.1 as build

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . ./
RUN yarn build

FROM nginx:latest 

COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]