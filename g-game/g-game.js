// program data:
var number = 4;
var guess;
var limit = 5;
var won = false;
var guesses=[]


for (i = 1; i <= limit; i++){
    // prompt user for their guess 
   // this is how we started: guess = prompt("Guess a number");
   do{
    guess = parseInt(prompt("Guess a number"));
   } while(!isPreviousGuess)
   

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won=true
        break;
    }
    // if incorrect: let the user know how  many tries they have remaining
    else{
        guesses[i]=guess;
        alert("incorrect. \n You have guessed: "+guesses[i].toString() + "\nTries remaining: " + (limit-i))
    }
}

if (!won){
    document.write("Sorry, you ran out of tries! Game over!"); 
}

function isPreviousGuess(){
    for(i2 = 0; i2 < guesses.length; i2++){
        if(guesses[i2] == guess){
            return true;
        }
    }
    return false;
}