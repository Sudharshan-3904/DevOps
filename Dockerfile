# Multi-stage Dockerfile: build with Node, serve with Nginx

# 1) Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install deps separately to leverage Docker layer caching
COPY package.json package-lock.json* .npmrc* ./
RUN npm install --no-fund --no-audit

# Copy source and build
COPY . .
RUN npm run build

# 2) Runtime stage
FROM nginx:1.27-alpine AS runtime

# Remove default server config and add SPA config with history fallback
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy built static assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


