FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm
RUN npm install -g typescript
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:root@localhost:5432/postgres

RUN npx prisma migrate dev
RUN npx prisma generate
RUN pnpm run build
EXPOSE 3000

CMD [ "pnpm", "start" ]