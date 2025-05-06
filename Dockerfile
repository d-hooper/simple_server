# Dockerfile 🐳
FROM node:22-alpine

WORKDIR /app

COPY . .

CMD ["node", "server.js"]