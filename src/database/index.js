const mongoose = require('mongoose') // import mongoose module to manage db

//connecting with DB
function connect() {

  //solution to 2 erros on professor video:
  // mongoose.set('useNewUrlParser', true)
  // mongoose.set('useUnifiedTopology', true)

  mongoose.connect('mongodb://localhost:27017/crud-project')

  const db = mongoose.connection
  //db worked
  db.once('open', () => {
    console.log('Connected to database!')
  })

  //db fail
  db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
  connect
}