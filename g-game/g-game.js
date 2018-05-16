// program data:
var number = Math.floor(Math.random() * 10);
var guess;
var limit = 5;
var won = false;
var guesses=[]


for (i = 1; i <= limit; i++){
    // prompt user for their guess 
   // this is how we started: guess = prompt("Guess a number");
   do{
    guess = parseInt(prompt(number + " Guess a number"));
   } while(isNaN(guess) || isPreviousGuess(guess));
   

    // if correct: let the user know they won
    if(guess == number){
        alert("Correct! You won. I will also write this on the page itself:)");
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
    document.write("Sorry, you ran out of tries. Game over. <br> The correct number was: " + number);
}

function isPreviousGuess(){
    for(i2 = 0; i2 < guesses.length; i2++){
        if(guesses[i2] == guess){
            alert("You already entered this!!!");
            return true;
        }
    }
    return false;
}