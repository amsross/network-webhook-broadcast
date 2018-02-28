FROM node:8

RUN apt-get update
RUN apt-get upgrade -y

RUN mkdir /code
WORKDIR /code

COPY package.json /code
COPY package-lock.json /code
RUN npm install --production

COPY release.json /code
COPY index.js /code

EXPOSE 3000
EXPOSE 41848/udp

CMD node /code/index.js
