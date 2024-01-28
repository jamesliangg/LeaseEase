FROM node:17

# Create app directory
#WORKDIR /usr/src/app

# Copy all required files
COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm ci --omit=dev

EXPOSE 3000
CMD [ "node", "index" ]