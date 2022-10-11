const CustomersModel = require('../models/customers')
const { cryptoPassword } = require('../utils/password') //importing function

const defaultTitle = 'CRUD Register'

function index(req, res) {
  res.render('register', {
    title: defaultTitle
  })
}

async function add(req, res) {
  const {
    name,
    age,
    email,
    password
  } = req.body

  const encryptedPassword = await cryptoPassword(password)

  const register = new CustomersModel({
    name,
    age,
    email,
    password: encryptedPassword,
  })

  register.save()

  res.render('register', {
    title: `${defaultTitle} - Registration sucessful`,
    css: true,
    message: 'Registration sucessful',
  })
}

async function listCustomers(req, res) {
  const users = await CustomersModel.find()

  res.render('listCustomers', {
    title: 'List of Customers',
    users,
  })
}

async function formEdit(req, res) {
  // console.log(req.query) //req.query = query string on url, it is separeted by &

  const { id } = req.query

  const user = await CustomersModel.findById(id)

  res.render('editCustomers', {
    title: 'Edit Customer - ' + user.name,
    user,
  })
}

async function edit(req, res) {

  const {
    name,
    age,
    email,
  } = req.body

  const { id } = req.params

  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email

  user.save()

  res.render('editCustomers', {
    title: `${defaultTitle} - user edited successfully!`,
    user,
    message: 'user edited successfully!'
  })

  //  console.log(req.params) //geting url params on POST
}

async function remove(req, res) {
  
  const { id } = req.params

  const remove = await CustomersModel.deleteOne({ _id: id })

  if (remove.deletedCount) {
    res.redirect('/list')
  }
  
}

module.exports = {
  index,
  add,
  listCustomers,
  formEdit,
  edit,
  remove,
}