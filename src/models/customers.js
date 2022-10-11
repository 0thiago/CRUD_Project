//MVC → Model↓
//importing mongoose
const mongoose = require('mongoose')

//setting the db schema
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
})

//creating a table named customers
const Model = mongoose.model('customers', schema)

module.exports = Model
