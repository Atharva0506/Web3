FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm
RUN npm install -g typescript
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .


RUN pnpm run build
EXPOSE 3000

CMD [ "node", "./dist/index.js" ]