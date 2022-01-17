FROM node:12.13.0-alpine AS base
RUN apk update \
  && apk add curl \
  && apk add make \
  && apk add gcc \
  && apk add g++ \
  && apk add git \
  && apk add openssh \
  && apk add python \
  && rm -rf /var/cache/apk/* \
  && rm -fr /app/.cache/yarn/*

FROM base AS development
ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY . $APP_HOME
EXPOSE 3000
CMD ["npm", "run", "start:dev:full"]

FROM development AS builder
RUN npm install
RUN npx tsc --removeComments
RUN ls -alth

FROM node:12.13.0-alpine AS production
ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY --from=builder $APP_HOME/dist/ $APP_HOME/dist
COPY --from=builder $APP_HOME/node_modules/ $APP_HOME/node_modules
COPY --from=builder $APP_HOME/package.json $APP_HOME/package.json
COPY --from=builder $APP_HOME/package-lock.json $APP_HOME/package-lock.json
COPY --from=builder $APP_HOME/docs/ $APP_HOME/docs
RUN pwd
RUN ls -alh $APP_HOME
RUN npm install --only=prod
EXPOSE 3000
CMD ["npm", "run", "start"]
