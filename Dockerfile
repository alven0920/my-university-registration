FROM node:14 AS BUILD_IMAGE

WORKDIR /app

COPY . /app

ARG APP_ID
ARG PORT
ARG DB_CLIENT
ARG DB_HOST
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_INTERACTIVE_TIMEOUT
ARG DB_WAIT_TIMEOUT

EXPOSE 9002

RUN npm install -g --quiet typescript pm2
RUN npm install

RUN npm run build

CMD ["node", "build/interface/rest/index.js"]