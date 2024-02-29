FROM node:20.5.1-alpine

WORKDIR /todo-frontend/

RUN corepack enable

COPY ./public/ /todo-frontend/
COPY ./src/ /todo-frontend/
COPY ./package.json /todo-frontend/

RUN yarn install

CMD ["yarn", "start"]