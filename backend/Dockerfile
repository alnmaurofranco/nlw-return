FROM node:16-alpine

RUN npm --global install pnpm@6.14.3

WORKDIR /usr/app

COPY package.json pnpm-*.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

EXPOSE 3333

CMD ["npx prisma migrate deploy", "&&", "pnpm", "start"]