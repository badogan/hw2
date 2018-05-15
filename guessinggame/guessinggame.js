function getuserinput()
{
    var number_entered = parseInt(window.prompt("Guess a number"));
    return number_entered
}

/*var random_number=Math.floor(Math.random() * 100);*/
var random_number=5;
var number_of_tries = 0;
var max_limit = 5;
var won = false;
var guesses_so_far =[];

for (var try=1; try <= max_limit; try++)
{
    num1 = getuserinput()
}
