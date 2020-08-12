'use strict';
let i = 0;
$('.button').on('click', renderQuiz);


function renderQuiz(event) {
    //we want i to change every time the button is clicked, rendering 
    //0 then 1 the first time the button is clicked
    //let current = STORE[i]
i++;

    let currentButton = createButton(STORE[i].button);
    let currentHeader = STORE[i].heading;
    let currentContent = createContent(STORE[i].content);
    
    
        $('.button').html(currentButton);
        $('.header').html(currentHeader);
        $('.content').html(currentContent);

if (i >= 6){
    i=0;
}

}



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



//TO KEEP TRACK OF QUESTION NUMBER
//we just want to access question STORE[1-5].index /5

//TO KEEP TRACK OF SCORE
//WE NEED A COUNTER
//WE NEED TO FIGURE OUT HOW TO COMMUNICATE WITH RADIO BUTTONS
//FIND OUT IF 





function main() {
}

$(main);