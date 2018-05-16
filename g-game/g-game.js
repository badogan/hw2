// program data:
var number = 4;
var guess;
var limit=5;
var won=false;

for (i = 1; i <= limit; i++){
    // prompt user for their guess 
    guess = prompt("Guess a number");

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won=true
        break;
    }
    // if incorrect: let the user know how  many tries they have remaining
    else{
        alert("incorrect. \nTries remaining: " + (limit-i))
    }
}

if (!won){
    document.write("Sorry, you ran out of tries! Game over!"); 
}