## Meganote
Meganote is a clone of Evernote written in AngularJS.

### Prerequisities
What things you need to install the software and how to install them

Meganote requires
* [MLAB](https://mlab.com/) account
    * Sign up for MLAB 
    * Create a new deployment and select the Sandbox Standard Line
    * Enter a database name i.e "meganote_foo"
    * Add a new collection i.e "notes_bar"
    * Make a database user and password i.e "user_buzz" and "password_xyz"
    * Find the MongoDB URI for your Database and copy it to a dotenv file and replace the dbuser and dbpassword field with your the database user and password from earlier
    * For example 
    ```sh
    $ touch .env 
    $ gedit .env <--- paste DB_URI=mongodb://<dbuser>:<dbpassword>@<host>:<port>/<db> --->
    ```

* [Node.js](https://nodejs.org/) v4+ to run.
* [Meganote-Server](https://github.com/mketiku/meganote_server)

You also need Gulp installed globally:
```sh
$ sudo npm install gulp -g
```

#### Installation
Clone this repo
```sh
$ git clone https://github.com/mketiku/meganote.git 
$ cd meganote 
```
Then run the following
```sh
$ npm install 
```
This will install dependencies and start a web server on port 8000.


### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

Open your browser to [localhost:8000](localhost:8000)
To change the URL of the API (`localhost:3030` by default), edit `app/constants.js`.

### Deployment
To deploy Meganote, copy the contents of the app folder to your remote server.

### Built With
* gulp
* bootstrap
* supervisor
* npm
* nodejs
* angularjs
* mlab.com
* jquery

### Acknowledgments
* Davey Strauss 
* Seth Baugman 