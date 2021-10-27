// Question 1

var num1 =  parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));
var add = num1+num2;

//Question 2

var sub = num1-num2;
var multiply = num1*num2;
var division = num1/num2;
var modulus = num1%num2;
document.write("Addition of " + num1 + " and " + num2 + " is " + add);
document.write("<br>Subtraction of " + num1 + " and " + num2 + " is " + sub);
document.write("<br>Multiplication of " + num1 + " and " + num2 + " is " + multiply);
document.write("<br>Division of " + num1 + " and " + num2 + " is " + division);
document.write("<br>Modulus of " + num1 + " and " + num2 + " is " + modulus);

//Question 3

var undefined = "";
var a = 5;
var b = a;
var c = ++b;
var d = c+7;
var e = d;

document.write("<br><br>Value after variable declaration is " + undefined);
document.write("<br>Initial Value:" + a);
document.write("<br>Value after increment is: "  + c);
document.write("<br>Value after addition is: "  + d);
document.write("<br>Value after decrement is: "  + --e);
document.write("<br>The remainder is: "  + e%3);


//Question 4

var ticket = 600;
var cost = ticket*5;
document.write("<br><br>Total Cost to buy 5 tickets to a movie is " + cost +"PKR");

//Question 5

var table = 4;
document.write("<br><br>Table of "+table);
document.write("<br><br>"+table +"x" +"1"+"="+table);
document.write("<br>"+table +"x" +"2"+"="+table*2);
document.write("<br>"+table +"x" +"3"+"="+table*3);
document.write("<br>"+table +"x" +"4"+"="+table*4);
document.write("<br>"+table +"x" +"5"+"="+table*5);
document.write("<br>"+table +"x" +"6"+"="+table*6);
document.write("<br>"+table +"x" +"7"+"="+table*7);
document.write("<br>"+table +"x" +"8"+"="+table*8);
document.write("<br>"+table +"x" +"9"+"="+table*9);
document.write("<br>"+table +"x" +"10"+"="+table*10);

//Question 6

var tempCel = 25;
var tempFer = 70;
document.write("<br><br>The Temperature Converter<br><br>")
document.write("<br>"+tempCel+"°C "+"is "+((tempCel*9/5)+32)+"°F");
document.write("<br>"+tempFer+"°F "+"is "+((tempFer-32)*5/9)+"°C");

//Question 7

var head = "Shopping Cart"
var price1 = parseInt(prompt("Enter Your First  Item Price"));
var quant1 = parseInt( prompt("Enter Your First  Item Quantity"));
var price2 =parseInt( prompt("Enter Your Second Item Price")) ;
var quant2 = parseInt(prompt("Enter Your Second Item Quantity")) ;
var charges = 100;
var totalPrice = ((price1*quant1)+(price2*quant2)+charges);
document.write("<br><br>"+ head+"<br>");
document.write("<br>"+"Price of item 1 is "+ price1);
document.write("<br>"+"Quantity of item 1 is "+ quant1);
document.write("<br>"+"Price of item 2 is "+ price2);
document.write("<br>"+"Quantity of item 2 is "+ quant2);
document.write("<br>"+"Shipping Charges  "+ charges);
document.write("<br><br>"+"Total Cost of your order is "+ totalPrice);


//Question 8

var heading = "Marks Sheet"
var obtainedMarks = parseInt(prompt("Enter Your Obtained Marks"));
var totalMarks = parseInt(prompt("Enter Total Marks"));
var percentage = (obtainedMarks/totalMarks*100);
document.write("<br><br>"+ heading + "<br>" );
document.write("<br>Total Marks: "+ totalMarks );
document.write("<br>Obtained Marks: "+ obtainedMarks );
document.write("<br>Percentage: "+ percentage );


//Question 9

var headcurrency = "Currency in PKR"
var usDollars = parseInt(prompt("Enter No of Dollars you want to Convert to PKR"));
var saudiRiyals = parseInt(prompt("Enter No of SaudiRiyals you want to Convert PKR"));
var d_Pkr = 173.19;
var s_Pkr = 46.17;
var tdollar_Pkr = (usDollars*d_Pkr);
var triyal_Pkr = (saudiRiyals*s_Pkr);
var totalCurrency = (tdollar_Pkr+triyal_Pkr);
document.write("<br>" + headcurrency +"<br><br>");

document.write("<br>" +"Dollar in PKR: " + tdollar_Pkr);
document.write("<br>" +"Riyal in PKR: " + triyal_Pkr);
document.write("<br>" +"Total Currency in PKR: " + totalCurrency);


//Question 10

var addNum = 5;
var multNum = addNum*10;
var divideNum = multNum/2;
document.write("<br><br>"+divideNum); 


//Question 11

var ageCalhead = "Age Calculator ";
var currentYear = parseInt(prompt("Enter Current Year"));
var birthYear = parseInt(prompt("Enter Your Birth Year"));
var yourAge = currentYear-birthYear;
document.write("<br><br>" + ageCalhead + "<br>" );
document.write("<br>" +"Current Year: " + currentYear);
document.write("<br>" +"Birth Year: " + birthYear);
document.write("<br>" +"Your Age is: " + yourAge);


//Question 12
var geomathead = "The Geometrizer";
var radius = parseInt(prompt("Enter Readius of Circle"));
var circumFerence = (2*3.142*radius);
var areaBased = (3.142*(radius*radius));
document.write("<br><br>The Geometrizer<br>")
document.write("<br>Radius of a circle: " + radius);
document.write("<br>The circumference is: " + circumFerence);
document.write("<br>The area is: " + areaBased);

//Question 13
var scalhead = "The Lifetime Supply Calculator ";
var snack = prompt("Enter the name of your Favourite Snake");
var currentAge = parseInt(prompt("Enter Your Current Age"));
var maxAge = parseInt(prompt("Enter Your Max Age"));
var snackAmount = parseInt(prompt("Enter amount of your per day snacks"));
var totalTime = ((maxAge*currentAge)/snackAmount);
document.write("<br><br>" + scalhead + "<br>");
document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current Age: " + currentAge);
document.write("<br>Estimated Max Age: " + maxAge);
document.write("<br>Amout of Snacks per day: " + snackAmount);
document.write("<br>You will need "+ totalTime + " " + snack + " to last you until the ripe old age of " + maxAge);
