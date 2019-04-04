FROM node:latest
RUN mkdir -p ../DockerNightLifeBack
RUN mkdir -p ../data
WORKDIR ../DockerNightLifeBack
COPY package.json ../DockerNightLifeBack
RUN npm install
COPY . ../DockerNightLifeBack
EXPOSE 3000
CMD ["npm", "start"]