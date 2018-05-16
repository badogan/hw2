var list = document.getElementById("myList");
var listItems = list.children; // get list of list items in the list
var removed = list.removeChild(listItems[2]); // remove the 3rd item from list
var message = document.createElement("p"); // create a paragraph element to display a message
message.innerHTML = "The following item was deleted " + removed.innerHTML; // message sharing which element was deleted
document.body.appendChild(message); // append paragraph message to the body to display on page