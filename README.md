# MERN To Do App Overview

Implementation of a To Do app. This app will allow a user to create a list of tasks, initially they'll be set as pending (not completed), but you will have the capacity to update it either as completed or back to pending. You'll have views for completed, pending and both, if you decide you no longer want that task in your list you can delete it and all operations on your tasks will be automatically updated.

I decided to use the MERN stack as a way to practice my skills on those technologies, React, Node.js, MongoDB and Express. The idea was to practice these technologies while performing CRUD operations with a Cloud Database. Below you'll find some demo videos on different parts of the implementation, as well as a brief explanation of the development parts.

* [REST API Demo Video](https://youtu.be/zbn0XOh1DtU)
* [React Demo Video](https://youtu.be/exIs8n7u74Q)
* [To Do App Demonstration](https://www.youtube.com/watch?v=ZS-pD5pzkss)

## React App

The frontend software was created with the purpose to help me practice React skills and to deepen my knowledge on connecting apps to a REST API.
This React app will fetch and post the data needed to interact with my REST API, and perform CRUD operations that will be reflected and automatically updated on the UI. Some concepts functions implemented from React are useEffect, useCallback, useState, styling with CSS, passing variables with props, importing/exporting components and more!

## REST API & Cloud Database

The REST API is build with Node.js and MongoDB, it follows a simple structure of routes and controllers to handle the interaction with the React app. Express is used as a framework to help me optmize my development time. Several packages were implemented with the help of npm and you'll find a list below. 

As mentioned above MongoDB is the cloud databased selected for this project.

The data is stored in a todoApp table, which contains only one collection named todoList.
The todoList collection contains our objects, and these objects have the following structure:
* _id: ObjectId
* taskId: string
* content: string
* isCompleted: bool

Among the functionalities included in this app MongoDB performs the following: insertOne, find, updateOne, deleteOne and several other queries to filter data.  

# Development Environment

* MongoDB 4.4.6
* Node.js 14.16.1
* Visual Studio Code
* Postman

## Libaries
* React 17.0.2
* body-parser 1.19.0
* express 4.17.1
* mongodb 3.6.9
* nodemon2.0.7
* path 0.12.7
* cors 2.8.5

# Useful Websites

* [React Documentation](https://reactjs.org/docs/getting-started.html)
* [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MongoDB Homepage](https://www.mongodb.com/)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [Node.js Documentation](https://nodejs.org/en/docs/)

# Future Work

* Deploy app to Heroku
* Implement user creation, authentication and task list per user