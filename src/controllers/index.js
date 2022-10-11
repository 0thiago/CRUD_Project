function index(req,res){
  res.render('index', {
    title: 'CRUD Index'
  })
}

module.exports = {
  index,
}