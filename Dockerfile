# Use Node.js 18 Alpine (small, secure base image)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better Docker caching)
COPY package*.json ./

# Install only production dependencies (with legacy peer deps to resolve conflicts)
RUN npm ci --omit=dev --legacy-peer-deps

# Copy the built application
COPY build ./build

# Copy static assets (images, etc.)
COPY static ./static

# Set environment to production
ENV NODE_ENV=production

# Expose port 3000 (SvelteKit default)
EXPOSE 3000

# Start the application
CMD ["node", "build"]