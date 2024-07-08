FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --production
RUN npm install sharp
COPY . .
RUN npx prisma generate
RUN npm run build
CMD ["npm", "start"]
