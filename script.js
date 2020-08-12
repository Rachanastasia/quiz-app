'use strict';

let i = 0;

//moves the iterator with event handler to each slide
//returns generated html from page
function renderQuiz() {
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

let currentString = currentQuestion.join('');

//must remove commas and make into string 
return `<form>${currentString}</form>`;

}


function buildRadioBtn(obj){
    return `<div class="answer">
    <input type="radio" name="${STORE[i].name}" value="${obj.value}">
    <label for="WHAT SHOULD I PUT HERE">${obj.answer}</label><br>
    </div>`;
}













//TO DO

//create variable for SCORE at $(.currentScore)
//figure out how to track and use this data

//research feilds for RADIO BUTTONS!!!
//add REQUIRED for radio buttons

//remove html elements from html
//create html areas for this

//TO KEEP TRACK OF QUESTION NUMBER
//we just want to access question STORE[1-5].index /5

//TO KEEP TRACK OF SCORE
//WE NEED A COUNTER
//WE NEED TO FIGURE OUT HOW TO COMMUNICATE WITH RADIO BUTTONS
//FIND OUT IF 

//MAKE OBJECT FOR CORRECT AND INCORRECT PAGE
//CREATE THAT FUNCTION THAT PULLS OBJECT AND INPUTS TEXT
//BASED ON WETHER ANSWER WAS TRUE OR FALSE
//EACH TIME
function checkSubmission(){
    event.preventDefault();
    let value = $('input[type="button"]:checked').val();
    console.log(value);
    //value in array


}



function main() {
  generateHTML(STORE[i]);
  //how to we get the 
}

$('main').on('submit', 'button', checkSubmission);

$('main').on('click', 'button', renderQuiz);

$(main);