var userName = window.prompt("Please enter your name");

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML = greetingParagraph.innerHTML+"," + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
operand1.innerHTML += num1;
operand2.innerHTML += num2;

var result_addition = num1 + num2;
var result_multiplication = num1 * num2;
var result_division = num1 / num2;
var result_subtraction = num1 - num2;
var result_modulus = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result_addition;
document.getElementById("subtraction").innerHTML = "The subtraction of " + num1 + " and " + num2 + " is " + result_subtraction;
document.getElementById("multiplication").innerHTML = "The multiplication of " + num1 + " and " + num2 + " is " + result_multiplication;
document.getElementById("division").innerHTML = "The division of " + num1 + " and " + num2 + " is " + result_division;
document.getElementById("modulus").innerHTML = "The modulus of " + num1 + " and " + num2 + " is " + result_modulus;

