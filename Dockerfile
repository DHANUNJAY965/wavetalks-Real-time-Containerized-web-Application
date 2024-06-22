FROM node:20

# Set the working directory
WORKDIR /wavetalk

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the project
RUN npm run build

# Expose the application ports
EXPOSE 3000
EXPOSE 3003

# Copy and make the start script executable
COPY start.sh /wavetalk/start.sh
RUN chmod +x /wavetalk/start.sh

# Start the application using the start script
CMD ["sh", "/wavetalk/start.sh"]
