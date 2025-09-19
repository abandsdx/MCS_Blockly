# Use the official lightweight Nginx image from Docker Hub
FROM nginx:alpine

# Set the working directory to the Nginx public HTML folder
WORKDIR /usr/share/nginx/html

# Remove the default Nginx welcome page
RUN rm -f index.html

# Copy the static content of our web application
COPY index.html .
COPY favicon.svg .
COPY js/ ./js/

# Expose port 80 to allow traffic to Nginx
EXPOSE 80

# The default command for the nginx:alpine image is to run nginx.
# We add this CMD to make it explicit that Nginx should run in the foreground.
CMD ["nginx", "-g", "daemon off;"]
