FROM node:12 as build-stage

WORKDIR /vue-app
COPY vue-app/. .

ENV PATH /vue-app/node_modules/.bin:$PATH
ENV VUE_APP_BASE_URL=https://dd-project-test.herokuapp.com/

RUN npm install
RUN npm run build

FROM python:3.9

ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /vue-app/dist/* app/static/

RUN pip install -r requirements.txt
RUN pip install psycopg2

CMD gunicorn app:app
