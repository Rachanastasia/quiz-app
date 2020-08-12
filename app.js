'use strict';

/*TEMPLATE GENERATION FUNCTIONS*/

//GENERATE START SCREEN
//GENERATE QUESTIONS
//GENERATE FEEDBACK
function generateStartScreen(obj){

    renderStartScreen();

}

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
    if (STORE.quizStarted === false){
        generateStartScreen();
    } else if (STORE.questionNumber <= 5){
        generateQuestions();
    } else {
        generateFeedback();
    }


    function makeButton(obj){
        return `<button class = '${obj.class}' type = '${obj.type}'>${obj.text}</button>`;

    }


    function generateStartScreen(){
        let header = '<h1 class="startScreenHeader">Are you ready to answer some questions about coding?<h1>';
        let startButton = {
            class : 'startButton',
            type: 'button',
            text: 'Start Quiz'
        }
        startScreenHtml = header + makeButton(startButton);
        //this has apostrophes in the middle. Do I need to push into array and join???
        renderStartScreen(startScreenHtml);
    }

    function renderStartScreen(str){
        $('main').html(str);
    }
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











function generateHTML(){
    generateStartScreen();
    generateQuestions();
    generateFeedback();
        //console.log('question')
    });
}










/*RENDER*/
function render(){
    let html = '';
    //put back into html
}


function renderTitle(){
   return $('main').html()
}









/* EVENT HANDLER FUNCTIONS*/
function start(){
    if(STORE.quizStarted === false){
        generateStartScreen();
    }
}
function quiz(questions, questionNumber){
    questions.forEach(function(question, answers){
        return renderPage();

    })
    questionNumber++;
    return 
}



function checkSubmission(event){
    event.preventDefault();
    //get button by name 
    //for each input get button
    let value = $('input[name=""]:checked').val();
    console.log(value);
    //value in array


}



function main() {

$('main').on('submit', 'radio', checkSubmission);

$('main').on('click', 'button', renderQuiz);

function main(){
    //call all functions here
}

$(main);