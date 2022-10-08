const express = require('express')
const path = require('path')

const app = express()

//setting ejs as template engine
app.set('view engine', 'ejs')

//setting the path for views folder
app.set('views', path.join(__dirname, 'views'))

//setting the path for public folder
app.use(express.static(path.join(__dirname, 'public')))

//allowing the project receiver data from forms
app.use(express.urlencoded({ extended: true }))

//routes:
//INDEX
app.get('/', (req,res) => {
  res.render('index', {
    title: 'CRUD Index'
  })
})

//404 page not found
app.use((req, res) => { //middleware
  res.send('Error 404 - Page Not Found')
})

//running server
const port = process.env.PORT || 8080
app.listen(port,()=> { 
  console.log('The server is running on '+port) 
})


