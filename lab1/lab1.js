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

var numbersString = num1 + " and " + num2 + " is ";

document.getElementById("element_ref_addition").innerHTML = "The sum of " + numbersString + result_addition;
document.getElementById("element_ref_subtraction").innerHTML = "The subtraction of " + numbersString + result_subtraction;
document.getElementById("element_ref_multiplication").innerHTML = "The multiplication of " + numbersString + result_multiplication;
document.getElementById("element_ref_division").innerHTML = "The division of " + numbersString + result_division;
document.getElementById("element_ref_modulus").innerHTML = "The modulus of " + numbersString + result_modulus;

