const bcrypt = require('bcrypt')

async function cryptoPassword(pwd) {
  const salt = await bcrypt.genSalt()    
  const password = await bcrypt.hash(pwd, salt)

  return password
}


module.exports = {
  cryptoPassword
}