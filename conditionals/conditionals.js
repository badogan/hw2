function getuserinput()
{
    var number_entered = parseInt(window.prompt("Enter a number"));
    return number_entered
}

num1 = getuserinput()
/*var num1 = 804;*/

var numbersString = "number entered is ";
var myNum = 2;
/*var myArray = ["a", "b", "c", "d", "e"]; */

if(num1 % 2 == 0)
{
  /*document.write("num1 is even");*/
while(myNum > 0)
{
    document.getElementById("decision_box").innerHTML += numbersString + "even";
    myNum = myNum - 1;
    /*for(x = 0; x < 4; x++) IN CASE I NEED IT LATER*/
    /* myArray[3];*/ 
}
}
else{
  /*document.write("num1 is odd");*/
  document.getElementById("decision_box").innerHTML += numbersString + "odd";
}