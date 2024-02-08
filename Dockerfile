# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
ENV DATABASE_URI database/bazy
RUN npm install --production
CMD ["node", "server.js"]
EXPOSE 3000
