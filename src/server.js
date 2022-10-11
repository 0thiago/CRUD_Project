const express = require('express') //import module express
const path = require('path') //path receive the app path

// const bcrypt = require('bcrypt') // imported on util/password

const db = require('./database')
const routes = require('./routes')

const app = express()

//connecting to database
db.connect()

//setting ejs as template engine
app.set('view engine', 'ejs')

//setting the path for views folder
app.set('views', path.join(__dirname, 'views'))

//setting the path for public folder
app.use(express.static(path.join(__dirname, 'public')))

//allowing the project receiver data from forms
app.use(express.urlencoded({ extended: true }))

//setting the routes
app.use('/', routes) // static pages

//running server
const port = process.env.PORT || 8080
app.listen(port, ()=> { 
  console.log('The server is running on '+port) 
})


