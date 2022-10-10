// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

var stored_username= "abc@gmail.com";
var stored_password= 12345;

var username= "abc@gmail.com";
var password= 123455;

if(stored_username==username){
  if(stored_password==password){
    console.log("Login Successfull");
  }
  else{
    console.log("Incorrect Password");
  }
}
else{
  console.log("Incorrect Username");
}