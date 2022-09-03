FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

COPY . /usr/src/app

CMD pnpm start