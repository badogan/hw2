// create references to page elements
var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var clearButton = document.getElementById("clear");

// add new item to task list
addButton.addEventListener("click", function(){
    var task = taskInput.value;
    // Don't add an empty string
    if(task.trim()){
        // add new task list item
        // 1: var newItem = document.createElement("LI");
        // 2: var taskText = document.createTextNode(task);
        // 3: newItem.appendChild(taskText);
        // My compbination of 1,2,3:)
        document.createElement("LI").appendChild(document.createTextNode(task))

        // clear text input box
        taskInput.value = "";
        taskList.appendChild(newItem);
         // add remove option for new item
        var removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty");
    }
});

// clear entire list
clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";
  });

  // remove a task from the list
function removeTask(e){
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem); 
  }