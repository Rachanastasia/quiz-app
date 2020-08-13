'use strict';
//function start
//function submit
//generate question
//generate feedback
//render feedback
//next flips back to false

let i = 0;

//moves the iterator with event handler to each slide
//returns generated html from page
function renderQuiz() {
    //should be rendering function if called next
    //within elseif 
    i++;
    if (i > 6){
        i=0;
        }
    
    return generateHTML(); 
}



//gets button and header and content data
//calls createButton() & createContent
//generates html to render
function generateHTML(){
    let currentButton = createButton(STORE[i].button, STORE[i].buttonType);
    let currentHeader = createHeader(STORE[i].heading);
    let currentContent = createContent(STORE[i].content);

    let renderedHTML = 
    `<div class="header">${currentHeader}</div>
    <div class="content">${currentContent}</div>
    <div class="button">${currentButton}</div>
    <div class="footer"></div>`;
//footer should contain 
//question x/5
//current score

//generate start screen
//generate questions
//generate feedback


//render store.started === true generate first quiz
//if question number is less that, generate html string

    $('main').html(renderedHTML);

}

function createButton(button, buttonType){
    return `<button type="${buttonType}">${button}</button>`;
}

function createHeader(){
    //THIS IS NOT WORKING!!!!!!!!!!!!
    let current = STORE[i];
    if(current.index !== 0 || 6){
        return `<h2>${current.heading}</h2>`;
    } else {
        return `<h1>${current.heading}</h1>`;
    }
}


//give STORE[i].content html formatting to become valid content
function createContent() {
    let current = STORE[i].content;
    if (current === ''){
        return current;

    } else if (typeof current === 'string'){
        return `<h3>${current}</h3>`;

    } else if (typeof current === 'object'){
        
        return buildQuiz(current);
    }

}

function buildQuiz(){
let currentQuestion = STORE[i].content.map(function(obj){
    return buildRadioBtn(obj);
});
//removes commas from array
let currentString = currentQuestion.join('');
return `<form id="radioButton">${currentString}</form>`;

}


function buildRadioBtn(obj){
    return `<div class="answer">
    <input type="radio" name="${STORE[i].name}" value="${obj.value}">
    <label for="WHAT SHOULD I PUT HERE">${obj.answer}</label><br>
    </div>`;
}




//call after store was manipulated
//to reflect change on the screen
//how to we get the 

  generateHTML(STORE[i]);
}



//handle start with jquery
//hand start with main
//call render after store.started 
//incriment score
//incriment question number
//RETURN STRING USED FOR RENDER

$(main);


/*const STORE = {
  questions: [ 
    { question: 'What is this?", answers: [ 'a','b','c','d' ], correct: 'b' }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}
Alex CumboAlex Cumbo3:41 PM
function handleStart() {
  $('main').on('click', '#startBtn', function() {
  // call the render function after, flipping STORE.quizStarted to `true`;
  });
}
function main() {
  handleStart();
  handleSubmit();
  handleNext();
  ...
  render();
}

$(main);
Alex CumboAlex Cumbo3:53 PM
if( STORE.quizStarted === false ) {
  // call the generateStartScreenHTML
} else if( STORE.questionNumber < STORE.questions.length - 1) {
  // if you're going with immediate feedback:
  if( STORE.giveFeedback ) {
    // call the feedbackGenerationFunction
  } else {
  // call the generateNextQuestion function
} else {
  // call the endScoreResult function
function render() {
  let html = '';
 // ... if else
 // according to which function was called:
  html = generateStartScreen();

 $( 'main' ).html( html );
}

}*/