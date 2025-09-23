# Build the app
FROM node:18-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

