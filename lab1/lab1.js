var userName = window.prompt("Please enter your name");

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML = greetingParagraph.innerHTML+"," + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");
operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var subtract = num1 - num2;
var modulus = num1 % num2;



