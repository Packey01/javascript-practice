//Validate the password using the following rules

//Must be 6-20 characters long
//Must start with a letter

function validate (input){
    input = prompt('Please choose a password between 6 and 20 characters.  The first character must be a letter.')
    let regex = /^[A-Za-z]\w{5,19}$/
    result = regex.test (input)
    console.log(result)
    if (result === true) {
      alert('Your password is acceptable')
    }
    else {
      alert('Your password is unnacceptable')
      validate()
    }
  }
  validate()