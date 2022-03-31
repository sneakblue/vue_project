FROM node:lts-alpine AS build-stage

# make the 'frontend' folder the current working directory
WORKDIR /frontend
COPY frontend/. .

ENV VUE_APP_BASE_URL=<your_url_here>

RUN npm install
RUN npm run build

FROM python:3.9

ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /frontend/build/* app/static/

RUN pip install -r requirements.txt
RUN pip install psycopg2

CMD gunicorn app:app
