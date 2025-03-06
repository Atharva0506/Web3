# Use Node.js 20 Alpine image
FROM node:20-alpine


WORKDIR /app

RUN npm i pnpm -g
RUN npm i typescript -g

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .


RUN npx prisma generate


RUN pnpm run build


EXPOSE 3000

CMD ["pnpm", "run", "dev:docker"]
