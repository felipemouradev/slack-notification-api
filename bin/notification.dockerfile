FROM node:9

COPY ./ /var/www/html
WORKDIR /var/www/html

RUN apt update && apt install mongodb -y

RUN npm install

CMD ["/bin/bash", "/var/www/html/bin/entrypoint.sh"]
