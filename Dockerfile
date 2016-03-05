FROM node:4.3.1

# this file was copied from
# https://github.com/nodejs/docker-node/blob/5934cfb183f13fec7ef17c5d185dbfe444d1da0f/4.3/onbuild/Dockerfile
# change to give bash access, to run node / grunt etc commands

RUN npm install -g grunt-cli
RUN npm install -g grunt-concat-depends

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#ONBUILD COPY package.json /usr/src/app/
#ONBUILD RUN npm install
#ONBUILD COPY . /usr/src/app

CMD [ "/bin/bash" ]
