FROM --platform=$BUILDPLATFORM node:lts-alpine as Node
#FROM  node:16-alpine as Node

ENV NODE_ENV=production

WORKDIR /home/node/app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN chown -R node:node /home/node/app
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

USER node

RUN npm i

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json ./tsconfig.json
COPY --chown=node:node ./gatsby-config.ts ./gatsby-config.ts

RUN npm run build

FROM nginx:latest

RUN apt update

COPY --from=Node /home/node/app/public /usr/share/nginx/html
COPY ./docker/nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/marketing-entrypoint.sh /

RUN ["chmod", "+x", "/marketing-entrypoint.sh"]
ENTRYPOINT ["/marketing-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]