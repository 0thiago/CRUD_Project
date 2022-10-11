const router = require('express').Router() //importing router method from express

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//----------------ROUTES--------------------//

//INDEX
router.get('/', IndexController.index)

//REGISTER CUSTOMERS PAGE
router.get('/register', CustomersController.index)
//ADD NEW CUSTOMERS REGISTER
router.post('/register/add', CustomersController.add)
//SHOW CUSTOMERS LIST
router.get('/list', CustomersController.listCustomers)
//EDIT CUSTOMERS
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)
//REMOVE CUSTOMERS
router.get('/remove/:id', CustomersController.remove)


//------------------------------------------//


//404 page not found
router.use((req, res) => { //middleware
  res.send('Error 404 - Page Not Found')
})

module.exports = router