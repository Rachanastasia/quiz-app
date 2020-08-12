'use strict';




$('button').on('click', renderQuiz);
function renderQuiz(event) {
    for (let i = 0; i < STORE.length; i++) {
        $('button').html(STORE[i].button);
    }

}

function pages() {

}
//give STORE[i].button html formatting to become a button 
function createButton() {

}

//let button = createButton(STORE[i].button)


//give STORE[i].content html formatting to become valid content
function createContent() {

}

//is it bad to store heading code in the object?


//make separate func for cycling through array
//we want to move headings outside main without altering the layout
//body flex to column
//or make div with class exclusive to inner content, not including button
//object for each of the pages with format changes to html. 










//TO DO

//set width for header and content with fixed vw height and vh width
//because this will help scale content in quiz 

//create variable for SCORE at $(.currentScore)

//make functions that add <button> 

//set state of button with ! to be able to press again















function main() {
//call all other functions here
}

$(main);