// Question 1

var a = parseInt(prompt("Enter Your value"));
var num = a;
document.write("<br>Result:<br><br><br>")
document.write("<br>The Value of a is: " + a);
document.write("<br><br><br>The Value of ++a is: " + ++num);
document.write("<br>Now the Value of a is: " + num);
document.write("<br><br><br>The Value of a++ is: " + num++);
document.write("<br>Now the Value of a is: " + num);
document.write("<br><br><br>The Value of --a is: " + --num);
document.write("<br>Now the Value of a is: " + num);
document.write("<br><br><br>The Value of a-- is: " + num--);
document.write("<br>Now the Value of a is: " + num);


// Question 2


var a = 2;
var b = 1; 
var result = --a - --b + ++b + b--;
document.write("<br><br>a is " +a);
document.write("<br>b is " +b);
document.write("<br>result is " +result);

// Question 3

 var name = prompt("Enter Your Name");
 document.write("<br><br>Hey Developer " + name);


// Question 4
 var table =  parseInt(prompt("Enter Table Number")) ;
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


// Question 5
var sub1 = prompt("Enter Your First Subject Name");
var sub2 = prompt("Enter Your Second Subject Name");
var sub3 = prompt("Enter Your Third Subject Name");
var total_subMarks = 100;
var obtain_1stMarks = parseInt(prompt("Enter your first Subject Marks"));
var obtain_2ndMarks = parseInt(prompt("Enter your second Subject Marks"));
var obtain_3rdMarks = parseInt(prompt("Enter your third Subject Marks"));
var perMarks_1 = (obtain_1stMarks / total_subMarks) * 100;
var perMarks_2 = (obtain_2ndMarks / total_subMarks) * 100;
var perMarks_3 = (obtain_2ndMarks / total_subMarks) * 100;
document.write("<br><br>" + " Subject " + " &nbsp; " + " Total Marks " + " &nbsp; " + " Obtained Marks " + " &nbsp; " + " Percentage ");
document.write("<br> " + sub1 + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + total_subMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + obtain_1stMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + perMarks_1);
document.write("<br> " + sub2 + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + total_subMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + obtain_2ndMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + perMarks_2);
document.write("<br> " + sub3 + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + total_subMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + obtain_3rdMarks + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + perMarks_3);
document.write("<br> " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; "+" &nbsp; "  + total_subMarks * 3 + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; " + " &nbsp; "+" &nbsp; "   + " &nbsp; " + " &nbsp; " + (obtain_1stMarks + obtain_2ndMarks + obtain_3rdMarks)+" &nbsp; "+" &nbsp; " +" &nbsp; " +" &nbsp; " +" &nbsp; " +" &nbsp; " +" &nbsp; "+" &nbsp; "  +" &nbsp; "  +" &nbsp; "    +(perMarks_1+perMarks_2+perMarks_3));