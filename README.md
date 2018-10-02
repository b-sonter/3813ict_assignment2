# 3813ict Assignment 2

## Git
The layout of my GIT repository is simply a private single branch repository. The approach I took for my version control was only commiting when I was happy with a newly implemented piece of code. If I got muddled up in trying to implement another feature I simply scrapped that part of code and redownloaded my previously commited code.

## Data Structures


## Angular Architecture
### Server Summary
The server files are spread mainly between 4 main files:
* server.js
* socket.js
* listen.js
* routes.js

### Server.js
This file is the main file that runs the server. It instantiates the other files as modules.
It is also the hub for all the APIs.


### listen.js
This file listens to the server for any changes.

### routes.js
This file was create to be able to utilise routes if needed. No content has been added other
then routes are started being logged.

### Socket.js
This file runs sockets.io for the chat service that is functional within the
angular application.

### APIs
The node server has a number of API's that the angular application utilises.

#### login
[POST]host/api/login: This API is used for logging into the system It connects to the MongoDb 'chatDb' and through the collection 'users' it will check that the user exists. It will then check to see if the password that has been inputed matches the username provided. If it does not match an error occurs. If it does match the following data structure is returned: {"username": "username", "password":"password", "permsissions":"permissions"}.

#### Users
[POST]host/api/newuser: This API checks the database to see if the username already exists in the database. It will send through True or False depending on whether or not the new inputed username exists.

[POST]/host/api/newuserwrite: This API writes the new user to the database. It writes to the user collection in the following datastructure: {"username": "username", "password":"password", "permsissions":"permissions"}.

[POST]host/api/checkfordelete: This API sends an array of all users from the database to the application to check that the user can be deleted.

[DELETE]host/api/deleteuser: This API recieves which user is to be deleted, deletes the user from the database then console logs which user has been deleted.

#### Groups
[POST]host/api/groups: This API sends a datastructure of all group data available to the application.

#### Images
[POST]host/api/upload: This API creates a path for images to be uploaded into the user images folder using formidable. 
