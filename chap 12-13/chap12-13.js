// Question 1

var num = parseInt(prompt("Enter Number"));
if (num == 0) {
    alert("Your Entered Zero Number");
} 
else if(num>0) {
    alert("Your Entered Positive Number");
}
else if(num<0){
    alert("Your Entered Negative Number");
}
else("Error! Please Enter Number");

// Question 2
var password ="Password";
var user = prompt("Enter Your Password");
if (user=="") {
    alert("Please Enter Your Password");
} else if(user==password) {
    alert("Correct! The password you entered matches the original password");
  
}
else{
    alert("Incorrect password");
}