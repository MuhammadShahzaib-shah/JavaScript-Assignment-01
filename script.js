// Q#1 . Write a script to greet your website visitor using JS alert box. (Welcome to  Our Website)
alert("Welcome To Our Website");

// Q2 Write a script to display message on your web page. (Error! Please Enter a valid password)
alert("Error! Please Enter a valid password");

// Q3 Write a script to display message on your web page: (Hint : Use line break)
alert("Hello I am Learning Web Development in \n Bano Qabil");

// Q4 Write a script to display messages in sequence (3 Alerts)
alert("Hello");
alert("My Self Muhammad Shahzaib Shah");
alert("Nice to meet you");

// Q5 Make use of alerts in your new/existing HTML & CSS project.
// Done in other assignment attached

// Q6 
// Done in other assigment attached

// Q7 Declare a variable called username.
var userName;

// Q8 Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Muhammad Shahzaib Shah";

// Q9 Write script to 

// (a)  Declare a JS variable, titled message. 
var message;

// (b) Assign “Hello World” to variable message
message = "Hello World";

// (c) Display the message in alert box.
alert(message);

// Q10 Write a script to save student’s bio data in JS variables and show the data in alert boxes
var namee = "Muhammad Shahzaib Shah"
var fatherName = "Muhammad Shoaib"
var classs = "  Class 12"
var personalInformation = `My Name is ${namee} \n My Father Name is ${fatherName} \n I recently Complete my ${classs}`;
alert("My information: \n" + personalInformation)


// Q11.Declare a variable called email and assign to it a string that represents yourEmail Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email = "102shahzaib@gmail.com"
alert("My Email Adress is" + email)

// Q12 Write a script to display this in browser through JS.
console.log(email);
document.write(`${email}<br>`);

// Q13 .Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var taj = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(taj)
console.log(taj)
document.write(`${taj} <br>`)

// Q14 .Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = "Age: 19"
alert(age)

// Q15 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visitor = +prompt("How many times  you visited this website")
console.log(`You  visited this website ${visitor}  times.`)
alert(`You  visited this website ${visitor}  times.`)
document.write(`You  visited this website ${visitor}  times.<br>`)

// Q16 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthyear = "20th June, 2005"
document.write(`${birthyear} <br>`)

// Q17 A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c.Quantity i.e.how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T - shirt(s) on XYZ Clothing store”.

var visitorName = prompt("Whats your Name?")
var product = prompt(`Mr ${visitorName} which type of cloths you want?`)
var color = prompt(`Mr ${visitorName} which type of color you want?`)
var quantity = +prompt(`${visitorName} how many ${product} in ${color} color do you want?`)
var confirmation = prompt(`${visitorName} ,your final order is  ${quantity} ${product} and in ${color} color \n Is that ok?`)
if (confirmation === "yes" || "ok " || "Yes") {
    console.log(`${visitorName} ordered ${quantity} on shahzaib clothing store`)
    document.write(`${visitorName} ordered ${quantity} on shahzaib clothing store.<br>`)
}
else {
    alert("Your order is not confirmed")
    console.log(`${visitorName} is not ordered ${quantity} on shahzaib clothing store`)
    document.write(`${visitorName} is not ordered ${quantity} on shahzaib clothing store. <br>`)

}

// Q18 Declare 3 variables in one statement.
var a = 9, b = true, c = "ok";

// Q19 Declare 5 legal & 5 illegal variable names.

// Legal Variables

// (a)
var yourName

// (b)
var your_name

// (c)
var $yourname

// (d)
var yourname123

// (e)
var _yourname

// // Illegal Variables

// (a)
//  var 3yourname

//(b)
//  var 2-yourname 

// (c)
//  var if

// (d)
//  var !yourname

// (e)
//  var let

// Q20 Display this in your browser 

// (a) ) A heading stating “Rules for naming JS variables” 
document.write("RULES FOR NAMING JS VARIABLES <br>")

// (b)  Variable names can only contain ______, ______, ______ and ______. Forexample $my_1stVariable $name, _name or name
document.write("Variable names can only contain dollar signs, letters (both uppercase And lower case), ____, digits (not at the starting of the variable).<br>")

// (c) Variables must begin with a ______, ______ or _____. For example
document.write("Variables must begin with a dollar sign, underscore, letter.<br>")

// (d) Variable names are case _________
document.write("Variable names are case sensitive.<br>")

// (e) Variable names should not be JS _________
document.write("Variables should not be JS reserved words.<br>")

// Q21 .Write a program that take two numbers & add them in a new variable Show the result in your browser
var num1 = +prompt("Enter first number for addition.")
var num2 = +prompt("Enter second number for addition.")
var total = console.log(num1 + num2)
var total = document.write("<br>num 1 + num 2 = ", num1 + num2)
// Q22 .Repeat task21 for subtraction, multiplication, division & modulus.
var num3 = +prompt("Enter first number for multiplication.")
var num4 = +prompt("Enter second number for multiplication.")
var totall = console.log(num3 * num4)
var totall = document.write("<br>num 1 * num 2 = ", num3 * num4)
var num111 = +prompt("Enter first number for division.")
var num222 = +prompt("Enter second number for division.")
var total3 = console.log(num111 / num222)
var total3 = document.write("<br>num 1 / num 2 = ", num111 / num222)

var num1111 = +prompt("Enter first number for subraction.")
var num2222 = +prompt("Enter second number for subraction.")
var total4 = document.write("<br>num 1 - num 2 =", num1111 - num2222)

var num11111 = +prompt("Enter first  number form modulus.")
var num22222 = +prompt("Enter second  number for modulus.")
var total5 = document.write("<br>num 1 % num 2 = ", num11111 % num22222)

// Q23 .Do the following using JS Mathematic Expressions

// (a) Declare a variable. 
var number;

// (b) Show the value of variable in your browser like “Value after variable declaration is: ??”. 
console.log(`Value after variable decleration is:  ${number}`);
document.write(`Value after variable decleration is:  ${number}`)

// (c). Initialize the variable with some number.
number = 15

// (d) Show the value of variable in your browser like “Initial value: 5”.
console.log(`Intial value of the variable: ${number}`)
document.write(`Intial value of the variable: ${number}<br>`)

// (e) Increment the variable.

number++;

// (f) Show the value of variable in your browser like “Value after increment is: 6”.
console.log(`Value of variable after increment: ${number}`)
document.write(`Value of variable after increment: ${number}<br>`)

// (g) Add 7 to the variable.
number += 7

// (h) Show the value of variable in your browser like “Value after additionis: 13”.
console.log(`Value of variable after addition: ${number}`)
document.write(`Value of variable after addition: ${number}<br>`)

// (i) Decrement the variable.
number--;

// (j) Show the value of variable in your browser like “Value after decrement is: 12”. 
console.log(`Value of variable after decreament: ${number}`)
document.write(`Value of variable after decreament: ${number}<br>`)

// (k) Show the value of variable in your browser like “Value after decrement is: 12”. 
var remainder = number % 3;

// (l) Output : “The remainder is : 0”.
console.log(`remainder after dividing 22 by 3: ${remainder}<br>`)
document.write(`remainder after dividing 22 by 3: ${remainder}<br>`)

// Q24 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var price = 600;
var totalPrice = price * 5;
console.log(`The total price for 5 tickets is " + ${totalPrice}rs`)
document.write(`The total price for 5 tickets is " + ${totalPrice}rs<br>`)

// Q25 document.write
var m = 2
console.log("2x1: " + m * 1)
console.log("2x2: " + m * 2)
console.log("2x3: " + m * 3)
console.log("2x4: " + m * 4)
console.log("2x5: " + m * 5)
console.log("2x6: " + m * 6)
console.log("2x7: " + m * 7)
console.log("2x8: " + m * 8)
console.log("2x9: " + m * 9)
console.log("2x10: " + m * 10)
// Or
document.write("2x1: " + m*1,"<br>")
document.write("2x2: " + m*2,"<br>")
document.write("2x3: " + m*3,"<br>")
document.write("2x4: " + m*4,"<br>")
document.write("2x5: " + m*5,"<br>")
document.write("2x6: " + m*6,"<br>")
document.write("2x7: " + m*7,"<br>")
document.write("2x8: " + m*8,"<br>")
document.write("2x9: " + m*9,"<br>")
document.write("2x10: " + m*10,"<br>")