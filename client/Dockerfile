FROM nodesource/node:5.10.0

ADD package.json package.json
ADD . .
RUN npm install --production



EXPOSE  3100
CMD ["npm", "run", "start"]
