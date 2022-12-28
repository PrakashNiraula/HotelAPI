const validator=require('validator');
var passwordValidator = require('password-validator');
const emailvalidator = require("email-validator");

const uservalidation=(data)=>{

let errors={};

var password = new passwordValidator();
// Add properties to it
password
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// Validate against a password string
console.log(password.validate('validPASS123'));
// => true
console.log(password.validate('invalidPASS'));
// => false

// Get a full list of rules which failed
console.log(password.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]

if(data.username){
    if(!validator.isLength(data.username.trim(),{min:6,max:30}))
    errors.username='Username must me 6 and 30 charater';
    
}else{
    errors.username='Username is required';
}

if(data.name){
    if(!validator.isLength(data.name.trim(),{min:3,max:30}))
    errors.name='name must me 3 and 30 charater';
    
}else{
    errors.name='name is required';
}

if(data.address){
    if(!validator.isLength(data.address.trim(),{min:3,max:30}))
    errors.address='address must me 3 and 30 charater';
    
}else{
    errors.address='address is required';
}

if(data.phone){
    if(!validator.isLength(data.phone.trim(),{min:10,max:30}))
    errors.phone='Phone number must be 10 digits';
    
}else{
    errors.phone='name is required';
}

// if(data.email){
//    if(emailvalidator.validate(data.email))
//     errors.email= 'Pleae enter a genuine email';
//     // Your call to model here
// }else{
//     errors.email='Invalid email';
// }



return{
    errors,isValid:Object.keys(errors).length==0
}

}

module.exports={
uservalidation

}