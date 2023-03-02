FROM node:16.14.2
COPY . .
RUN yarn install
RUN yarn run build
RUN rm -R .next/cache/
CMD ["yarn", "start"]
