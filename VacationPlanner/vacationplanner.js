var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

timingNext.onclick = function(){
    document.getElementById("budgetSection").removeAttribute("hidden");
} 

function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    
    var daysMessage = document.getElementById("daysMessage");
     if(days < 4){
         daysMessage.innerHTML = "Short trips are always worth it!";
     }
     else if(days < 7){
         daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }

     var hoursMessage = document.getElementById("hoursMessage");
     hoursMessage.innerHTML = "Your trip is" + days*24 + " hours long!";

     var minutesMessage = document.getElementById("minutesMessage");
     minutesMessage.innerHTML = "Your trip is" + days*24*60 + " minutes long!";

     var secondsMessage = document.getElementById("secondsMessage");
     secondsMessage.innerHTML = "Your trip is" + days*24*60*60 + " seconds long!";

     var timingNext = document.getElementById("timingNext");
     timingNext.removeAttribute("hidden");

}