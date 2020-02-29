FROM node:10

WORKDIR /usr/src/trangtrang_portfolio

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=3020

EXPOSE $PORT

CMD ["npm", "start"]
