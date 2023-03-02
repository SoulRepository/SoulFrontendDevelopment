# FROM node:16.14.2
# COPY . .
# RUN yarn install
# RUN yarn run build
# RUN rm -R .next/cache/
# CMD ["yarn", "start"]

FROM node:14.18.3 AS builder
COPY . .
RUN yarn
RUN yarn build
CMD yarn start

FROM nginx
COPY --from=builder /build /usr/share/nginx/html
COPY --from=builder default.conf /etc/nginx/conf.d/default.conf
