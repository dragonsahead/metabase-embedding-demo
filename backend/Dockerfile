FROM oven/bun:1.3

WORKDIR /app

ADD api.js bun.lockb jsconfig.json package.json package-lock.json .

RUN bun install

EXPOSE 9090

CMD ["bun", "--watch", "api.js"]