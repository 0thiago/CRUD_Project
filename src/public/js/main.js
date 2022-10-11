removeCustomer = document.querySelectorAll('#removeCustomer')
         
removeCustomer.forEach((element)=>{
 element.onclick = () => {

  customerName = element.dataset['name']

  let confirmation = confirm(`Are you sure you want to remove ${customerName} ?`)

  if (!confirmation) {
    return false
  } else {
    window.location = `${element.dataset['id']}`
  }
 }
})   

