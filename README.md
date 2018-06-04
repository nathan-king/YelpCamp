# YelpCamp

A Node.js application with RESTful routing -- from The Web Developer's Bootcamp by Colt Steele.

## Features

* Responsive web design utilising **Bootstrap** and **Sass**
* Flash messages that respond to user input using **connect-flash**
* Manage camgrounds and comments (create, edit and delete)
* Authentication (admin and user registration and login) utilising **passport.js**
* Open sessions using **express-session**
* Authorisation :
  * Permission for post modification is only granted to the owner of the post and admin
  * A user must be authorised before viewing their profile
* RESTful routing
* Stored data using MongoDB


## Set-Up

 _Although this repository can be downloaded or cloned for personal use, API keys have not been given._

#### Clone Repository

> git clone https://github.com/nathan-king/YelpCamp.git

#### Install Dependencies 

> npm install

#### Run Live Sass Compiling

> npm run compile:sass

### Deployed Demo

For a live demo head to http://serene-island-27431.herokuapp.com/
