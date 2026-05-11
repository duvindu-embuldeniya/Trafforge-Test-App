# Stage 1: Build
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_SERVER_BASE_URL=http://localhost:8000/api/v1

RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]