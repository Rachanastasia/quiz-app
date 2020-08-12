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
    let currentButton = STORE[i].button;
    let currentHeader = STORE[i].heading;
    let currentContent = createContent(STORE[i].content);

    let renderedHTML = 
    `<div class="header">${currentHeader}</div>
    <div class="content">${currentContent}</div>
    <div class="button"><button type="button">${currentButton}</button></div>
    <div class="footer"></div>`

    $('main').html(renderedHTML);

//footer should contain 
//question x/5
//current score

}

function createHeader(){
    //add heading tags based on logic
    if(i = 0 || 6){
//header is given h1 tags
    } else{
//header is given h2 tags
    }
}


//give STORE[i].content html formatting to become valid content
function createContent() {
    let current = STORE[i].content;
    if (current === ''){
        return current;

    } else if (typeof current === 'string'){
        return `<h3>${current}</h3>`;

    } else if (typeof current === 'array'){
        
        return buildQuiz(current);
    }

}

function buildQuiz(){
let currentQuestion = STORE[i].content.map(function(obj){
    return buildRadioBtn(obj);
});
return `<form>${currentQuestion}</form>`;

}


function buildRadioBtn(obj){
    return `<div class="answer">
    <input type="radio" name="${STORE[i].name}" value="${obj.value}">
    <label for="WHAT SHOULD I PUT HERE">${obj.answer}</label><br>
    </div>`;
}



function createRadio(index, answer, value){
    return {
        index: index,
        answer: answer,
        value: value
    }
}









//TO DO

//set width for header and content with fixed vw height and vh width
//because this will help scale content in quiz 

//create variable for SCORE at $(.currentScore)
//figure out how to track and use this data

//make functions that add <button> and formats content

//set state of button with ! to be able to press again

//change formatted answers to objects run through a function

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





function main() {
  generateHTML(STORE[i]);
  //how to we get the 
}



$('main').on('click', 'button', renderQuiz);

$(main);