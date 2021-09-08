FROM node:alpine
WORKDIR '/tictoetac'

COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]

