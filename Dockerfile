# Use the Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.50.0-jammy
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy your application code into the container
COPY . /app
 
# Install Java and other dependencies
RUN apt-get update && \\
    apt-get install -y openjdk-11-jre-headless && apt-get install -y curl && \\
    npm install
 
# Set environment variables or additional configuration if needed
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd

# Command to run your Playwright tests
CMD ["npx", "playwright", "test"]
