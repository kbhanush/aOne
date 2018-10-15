# TODO
# change to ATP Docker
FROM node:8.2.1-slim

# Install oracle db client for oracle db driver in node app
WORKDIR /opt/oracle
RUN apt update -y  && \
    apt -y install unzip libaio1
ADD instantclient18_3.zip .
RUN unzip instantclient18_3.zip && rm instantclient18_3.zip
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_18_3:$LD_LIBRARY_PATH


# install npm packages
WORKDIR /opt/oracle/app
ADD package.json .
RUN npm install


# # copy rest of files
ADD . .
CMD [ "node", "server.js" ]