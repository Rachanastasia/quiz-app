'use strict';

let i = 0;

function renderQuiz() {
    //on click we want to run this function
    //how to render on page load too?
    i++;
    if (i >= 6){
        i=0;
        }
    
    return generateHTML();

    
}
function generateHTML(){
    //gets button and header and content data
    //calls createButton() & createContent
    //generates html to render
    let currentButton = createButton(STORE[i].button);
    let currentHeader = STORE[i].heading;
    let currentContent = createContent(STORE[i].content);

    let renderedHTML = 
    `<div class="header">${currentHeader}</div>
    <div class="content">${currentContent}</div>
    <div class="button">${currentButton}</div>
    <div class="footer"> 
    </div>`

    $('main').html(renderedHTML);

//footer should contain 

}

//create items
//render html
//render items

//give STORE[i].button html formatting to become a button 
function createButton() {
    let buttonReady = `<button type="button">${STORE[i].button}</button>`;
    return buttonReady;

}



//give STORE[i].content html formatting to become valid content
function createContent() {
    let current = STORE[i].content;
    if (current === ''){
        return current;
    //will this confuse the system or does it successfully
    //weed out the empty strings???
    } else if (typeof current === 'string'){
        return `<h3>${current}</h3>`;
    } else if (typeof current === 'array'){
       return buildQuiz(current);

    }

}

function buildQuiz(){
//SHOULD THIS INCLUDE THE FACTORY FUNCTION AT LINE ~83???
//this function loops through content array
//and retrieves each object value
//then sends each through buildQuizRadio

buildQuizRadio();
}


function buildQuizRadio(){
    //forEach STORE[x].content
    //access element in content array
    return `<div class="answer">
    <input type="radio" name="${STORE[i].name}" value="${STORE[i].content[i].value}">
    <label for="WHAT SHOULD I PUT HERE">${STORE[i].content[i].answer}</label><br>
</div>`
}




//FACTORY FUNCTION
//if I want to use this in the database, do I have to move the 
//factory to store.js?

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