# CRUD API
CRUD stands for Create, Read, Update and Delete.
API - Application Programming Interface
When we talk of API, we can see it in two ways.
1. You can create an API of your own
2. You can consume an API already created by someone else or an organization (axios, got, super-agent)


mongoose is a form of API but it's a module to enable to communicate with mongoDB


MERN developer - MongoDB/Mongoose, ExpressJS, ReactJS, NodeJS - Fullstack
                    database       server    frontend  runtime Environment


csv / json

http and https
Assignment - know the full meaning HTML 
HTTP/S methods
HTTPS - secure, comes with SSL certification
REST API - conform to JSON
GET - read or retrive from database 
POST - create or save to the database 
PUT - update completely on the database
PATCH - partial update on the database
DELETE - delete from the database


modules (API's but they're programs already written by another developer) e.g mongoose, express, nodemon, axios
in-built modules (contained in the programming language already) e.g path, fs, readline, event, os, http etc - NODEJS

PORT: mysql - 3306, mongoDB(NoSQL) - 27017, postgreSQL(SQL) - 5432   
localhost: 127.0.0.1, 0.0.0.0 - everywhere

routes: endpoints, a route can either be protected or not protected
As a backend engineer you'll be tasked to create endpoints a lot

MVC architecture - Model, View and Controller
           data modelling, UI,     functions or methods (business logic of the application)
        For view - The frontend engineer is going to take care of that


        NIP - NIBSS Interbank payment // OPay, moniepoint, Palmpay (use flutterwave or paystack or E-transact)

create, read

today - update, delete and also we'll do seperation of concerns, request query

Request - 3 things associated with request most of the time
it's in the body - req.body
the query - req.query
the params - req.params

// request params - http://localhost:3000/notes/:id

// request query - http://localhost:3000/notes?id=23456asdfg45


update or delete = req.params


SEPERATION OF CONCERNS

src file:
config/database - entails connecting to the database
controllers - business logic (functions / methods of the logics of our application)
routes - routes or endpoints
models - schemas.

app.js - connections to routes
server.js - entry file


Environment Vairables.