# 3813ict Assignment 2

## Git
The layout of my GIT repository is simply a private single branch repository. The approach I took for my version control was only committing when I was happy with a newly implemented piece of code. If I got muddled up in trying to implement another feature I simply scrapped that part of code and redownloaded my previously committed code.

## Data Structures
My data structures were broken down into 2 main different groups. The client side and server side. The different groups of users were represented in the client side, each given slightly different dashboards. These different users were the General Users, Admins and Super Admins.

The components within this application consisted of the following;
* channels
* chat
* create
* delete
* home
* login

### Server Summary
The server files are spread mainly between 4 main files:
* server.js
* socket.js
* listen.js
* routes.js

** Server.js **
This file is the main file that runs the server. It instantiates the other files as modules.
It is also the hub for all the APIs.


** listen.js **
This file listens to the server for any changes.

** routes.js **
This file was create to be able to utilise routes if needed. No content has been added other
then routes are started being logged.

** Socket.js **
This file runs sockets.io for the chat service that is functional within the
angular application.

### Services
The services that were used within the server are as follows;

** Authenticator Service **
The authenticator service is responsible for CRUD actions to the login APIs.

** Group Service **
The group service is responsible for CRUD actions to group APIs.

** Image Upload Service **
The Image upload service is responsible for CRUD actions to image upload APIs.

** Socket Service **
The socket service handled information being sent and received from the server to the client from the socket.io server.

** User Service **
The user service is responsible for CRUD actions to user APIs.

## REST APIs
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
