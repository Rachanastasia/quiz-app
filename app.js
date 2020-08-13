'use strict';



//GENERATE START SCREEN
//GENERATE QUESTIONS
//GENERATE FEEDBACK

 //get in by saying store.questions 

    //then use array methods to cycle through each question

    //processing click on answer button

    //storing answer from the user

    //adding next button

      //next button does not work unless user has input radio button

      //where is radio button input stored???

    //moving on to the next question with next button when the first one is submitted

    //make variable for rendering this button as next

      //next button must keep track of question by question number

      //and access each question
        //formatted as an h3
      //and each set of answers
        //formatted in a form as radio buttons

    //make different buttons with different classes





    //if quizStarted === false - render main page with start button
   

 

    
      //input title and start button
    //go to each quiz information by question number
    //array.length + 1
    //questionNumber++
    
    //questionNumber = STORE.quesionNumber

    //QUESTION NUMBER NEEDS TO BE RENDERED ON EVERY QUESTION

    //if questionNumber == 1
    //get questionOne
    //renderQuestionone
    //make event handler that captures the answer and STORE.score++
    //if submitted correct answer, render correct answer content
    //with updated score
    //else render wrong answer content
    //with STORE.questions[questionNumber-1].correctAnswer
    //QuestionNumber++

    //if questionNumber == 2
    //get questionTwo
    //renderQuestionTwo
    //use event handler to capture the answer if 
    //answer cought by event handler ==== STORE.questions[1].correctAnswer
    //STORE.score++
    //STORE.questionNumber++
    //... until questionFour

    //if questionNumber === 5
    //go to results page after shown if answer is correct

    //results page has:
    //you got STORE.score / 5 correct!
    //button play again?

    //has class and constructor for types of buttons
    //submission buttons
    //next page buttons (with different text based on which page)
    //playagain button on last page sets store.quizStarted to false



/*TEMPLATE GENERATION FUNCTIONS*/


//function to control what is being shown




function generateStartScreen(){
    let header = '<h1 class="startScreenHeader">Are you ready to answer some questions about coding?</h1>';
    let startButton = {
        class : 'nextButton',
        type: 'button',
        text: 'Start Quiz'
    }
    startScreenHtml = header + makeButton(startButton);
    //this has apostrophes in the middle. Do I need to push into array and join???
    renderStartScreen(startScreenHtml);
}

function generateQuestions(){
    let question = STORE.questions[STORE.questionNumber].question;
    let answers = STORE.question[STORE.questionNumber].answers;

    let formattedAnswers = answers.map(function(answer){
        //research fields and find out which can be changed
        //radio button id for each or for each set? 
        return `<input type="radio" id="one" name="" value="false">
            <label for="">${answer}</label><br>`;

    }).join(",");

    return `<form id="answers">${formattedAnswers}</form>`;

}

//add information to question render function

function makeButton(obj){
    return `<button class = '${obj.class}' type = '${obj.type}'>${obj.text}</button>`;

}









/*RENDER*/

function renderStartScreen(str){
    $('main').html(str);
}






/* EVENT HANDLER FUNCTIONS*/
function checkSubmission(event){
//if input is not checked
//submit button should not be clickable
}


function main() {

    if (STORE.quizStarted === false){
        generateStartScreen();
    } else if (STORE.questionNumber <= 5){
        generateQuestions();
    } else {
        generateFeedback();
    }






$('main').on('submit', 'radio', checkSubmission);


//moves to question from main and from feedback to question
$('main').on('click', '.nextButton', generateQuestions);
//if doesnt run move event handlers


//two different buttons submit and next
//listen for event trigger
//if nothing triggered 
//unless input is pressed
//next is unclickable unless returns data 


}

$(main);