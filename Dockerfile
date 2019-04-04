FROM node:latest
WORKDIR /DockerNightLifeBack
COPY package.json /DockerNightLifeBack
RUN npm install
COPY . /DockerNightLifeBack
EXPOSE 3000