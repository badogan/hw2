var questionForm = document.getElementById("add-question");
questionForm.onsubmit = processForm;

function processForm(){
    event.preventDefault();
    var newQuestion = {
        question: questionForm.question.value,
        choiceA: questionForm.choiceA.value,
        choiceB: questionForm.choiceB.value,
        choiceC: questionForm.choiceC.value,
        choiceD: questionForm.choiceD.value,
        correct: questionForm.correct.value
    };
    // if local storage contains questions, pull and update stored data. Store new object otherwise
    if(localStorage.getItem("questions")){
        var questions = Array.from(JSON.parse(localStorage.getItem("questions")));
        questions.push(newQuestion);
        localStorage.setItem("questions", JSON.stringify(questions));
    }
    else{
        localStorage.setItem("questions", JSON.stringify(newQuestion));
    }
    questionForm.reset();
    return false;
}