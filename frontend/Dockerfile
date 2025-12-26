FROM node:21-alpine AS builder

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]