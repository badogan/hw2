var num1 = parseInt(window.prompt("Enter a number"));

/*var num1 = 804;*/

if(num1 % 2 == 0)
{
  /*document.write("num1 is even");*/
  document.getElementById("decision_box").innerHTML = "number entered is even";
}
else{
  /*document.write("num1 is odd");*/
  document.getElementById("decision_box").innerHTML = "number entered is odd";
}