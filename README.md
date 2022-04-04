# Vue.js w/ Flask #

## Install Vue CLI ##
1. Install the vue CLI globally using the following command:

    ```bash
        npm install -g @vue/cli
    ```

2. add this line to your **.bashrc**:

    ```bash
        alias vue='winpty vue.cmd'
    ```

- Note - to generate a new Vue app using the Vue CLI (if prompted
for preset by the CLI, choose default): `vue create <app-name>`
    - a folder labeled `<app-name>` will be generated containing the Vue skeleton
    - Beyond the default options, more node modules can be installed that typically complement Vue.js



### Pinia Notes ###
- Each "slice of state" is referred to here as "stores"
- actions === thunks - allows for use of async functions as well as params to be passed in. It is also possible to update the state inside of an action, making the reason to call a getter while fetching from the backend redundant
- getters == actions & reducer switch case rolled into one! - since there is no need to declare an action-switch case, getters are more functions to call to make specific updates to the stores. In use if you only want to modify the existing store


# Vue Docs #
- Vue - https://vuejs.org/
- Vue CLI - https://cli.vuejs.org/
- Pinia - https://pinia.vuejs.org/
- Vue Router - https://router.vuejs.org/


## Starting the app ##

1. Install dependencies

    ```bash
    pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
    ```

2. Create a .env file based on the example with proper settings for your development environment

3. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

4. Open a new terminal and cd into **vue-app**

5. run terminal command:
    ```bash
        npm run serve
    ```

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `VUE_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://vue-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
