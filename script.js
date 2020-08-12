'use strict';




$('button').on('click', renderQuiz);
//eventually want .on(renderQuiz) to call 
//createButton, createContent

function renderQuiz(event) {
    //i=0??
    for (let i = 0; i < STORE.length; i++) {
        $('button').html(STORE[i].button);
    }

    //this is not really cycling through each of the items. 

}
//cycle through the array on click and call every one of these functions


//give STORE[i].button html formatting to become a button 
function createButton() {
    let buttonReady = `<button type="button>${STORE[i].button}</button>`;
    return buttonReady;

}

//let button = createButton(STORE[i].button)


//give STORE[i].content html formatting to become valid content
function createContent() {
    //logic to see if STORE[x].content needs building
    //if true call:
    //can use switch based on content as string or obj
     //buildQuiz();

}

function buildQuiz(){
//call this function with STORE[1-5] to build 
//calls buildQuizQuestion
}


function buildQuizQuestions(){
    
    //forEach STORE[x].content
    //access element in content array
    return `<div class="answer">
    <input type="radio" name="${STORE[X].name}" value="${STORE[X].content[X].value}">
    <label for="WHAT SHOULD I PUT HERE">${STORE[X].content[X].answer}</label><br>
</div>`
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









function main() {
}

$(main);