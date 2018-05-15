var num1 = parseInt(window.prompt("Enter a number"));

/*var num1 = 804;*/

var numbersString = "number entered is ";
var myNum = 2;

if(num1 % 2 == 0)
{
  /*document.write("num1 is even");*/
while(myNum > 0)
{
    document.getElementById("decision_box").innerHTML += numbersString + "even";
    myNum = myNum - 1;
}
}
else{
  /*document.write("num1 is odd");*/
  document.getElementById("decision_box").innerHTML += numbersString + "odd";
}