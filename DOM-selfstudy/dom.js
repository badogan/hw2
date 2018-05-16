var list = document.getElementById("ref_myList");
var listItems = list.children; // get list of list items in the list
var removed = list.removeChild(listItems[2]); // remove the 3rd item from list
var message = document.createElement("h1"); // create a paragraph element to display a message
message.innerHTML = "The following item was deleted " + removed.innerHTML; // message sharing which element was deleted
document.body.appendChild(message); // append paragraph message to the body to display on page

var paragraph = document.getElementById("myParagraph");
var i = 0;

paragraph.onclick = changeGreeting;

function changeGreeting(){
    if (i%2 == 0) {
        paragraph.innerHTML = "Good Night!";
    }
        else {
        paragraph.innerHTML = "Good Morning!";
    i=i+1
    }
}