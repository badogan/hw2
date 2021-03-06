var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

timingNext.onclick = function(){
    document.getElementById("budgetSection").removeAttribute("hidden");
} 

var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = calculateBudget;

var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg" ];
var currentImage = 0;
setInterval(changeImage, 4000);
function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}



function calculateBudget(){
    var budgetInput = document.getElementById("tripBudget");
    var budget = budgetInput.value;
    
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    tripExchangeMsg.innerHTML = "Your budget is" + budget*1.4 + " in NZ currency";

    var days2Input = document.getElementById("days");
    var days2 = days2Input.value;

    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
    dailyExchangeMsg.innerHTML = "Your daily budget is" + budget*1.4/days2 + " (in NZ currency)";
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