'use strict';


//if quizStarted === false - render main page with start button


//ESLINT at end to 'lint' code
//change esling rules to ignore spacing


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


function generateStartScreen() {
    let header = '<h1 class="startScreenHeader">Are you ready to answer some questions about coding?</h1>';
    let startButton = {
        class: 'nextButton',
        type: 'button',
        text: 'Start Quiz'
    }

    let button = makeButton(startButton);

    let startScreenHtml = `${header}${button}`;
    STORE.questionNumber++;

    render(startScreenHtml);
}


function generateQuestions() {

    let num = STORE.questionNumber;


    let question = STORE.questions[num].question;
    let answers = STORE.question[num].answers;
    let name = STORE.question[num].variables.name;
    let values = STORE.question[num].variables.value;

    let answerButtons = answers.map(function (answer) {
        return `<input type="radio" name="${name}" value='${value}'>
            <label for="">${answer}</label><br>`;

    });


    let answerString = answerButtons.join(",");
    let startButton = {
        class: 'replayButton',
        type: 'button',
        text: 'Play Again?'
    };

    let submitButton = {
        class: 'submitButton',
        type: 'submit',
        text: submit
    };

    //add property for question submitted
    //if true, run T/F function
    //if not, render questions page

    let buttonNext = makeButton(startButton);
    let buttonSubmit = makeButton(submitButton);

    let formattedHTML = `<h3>${question}</h3>${answerString}`;

   return render(formattedHTML);

}

//how do I get the page to re-render immediate feedback on wether answer was right or wrong

function generateCorrect() {
    let heading = "<h1>That's right!</h1>"
    let currentScore = `<h3 class = "score">Your current score is ${STORE.score} / ${STORE.questionNumber}</h3>`


}

function generateIncorrect() {
    let heading = "<h1>That's not right</h1>";
    let correctAnswer = `<h3 class='corrected'>The correct answer is: ${STORE.questions[questionNumber].correctAnswer}`;
    let currentScore = `<h3 class = "score">Your current score is ${STORE.score} / ${STORE.questionNumber}</h3>`;


}



function generateFeedback() {
    let header = '<h1 class="feedBackHeader">End of Quiz</h1>';
    let startButton = {
        class: 'replayButton',
        type: 'button',
        text: 'Play Again?'
    };

    let submitButton = {
        class: 'submitButton',
        type: 'submit',
        text: submit
    };

    let buttonReplay = makeButton(startButton);
    let buttonSubmit = makeButton(submitButton);
    let content = `<h3>You got ${STORE.score} / ${STORE.questionNumber} correct!</h3>`;
    let feedbackArr = [];

    let feedbackHTML = feedbackArr.push(header, content, buttonReplay).join(',');

    render(feedBackHTML);

}


function makeButton(obj) {
    return `<button class= '${obj.class}' type = '${obj.type}'>${obj.text}</button>`;

}









/*RENDER*/
//renders html to DOM based on what is put into function
function render(str) {
   return $('main').html(str);
}



/* EVENT HANDLER FUNCTIONS*/

//write event that flips state of STORE.quizStarted to false
function replayQuiz(event) {
    return STORE.quizStarted = 'false';
}


function checkSubmission(event) {
    event.preventDefault();
    //gets button name from STORE
    let name = STORE.questions.variables.name;
    //retrieves button with input name and checked value
    //how do I retrieve specific buttons???
    let answer = $(`input[name:'${name}']:checked`).val();
    if (answer === STORE.questions[questionNumber].correctAnswer) {
        STORE.score++;
        return generateCorrect();
    } else {
        return generateIncorrect();
    }

}

function validateNextButton() {
    //pass in answer set
    //if none of the answers are checked 
    //if quizStarted === true && questionNumber === 1-5,
    //let answer = $("input-[names-correctAnswer]:checked".val();('
    //forEach answer in array of formatted answers, 
    //if $input-[names])

}




function main() {

    if (STORE.quizStarted == false) {
        generateStartScreen();
        
    } else if (STORE.questionNumber <= 5) {
        generateQuestions();
    } else {
        generateFeedback();
    }


}

$('main').on('submit', 'radio', checkSubmission);

$('main').on('click', '.replayButton', replayQuiz);
//moves to question from main and from feedback to question
$('main').on('click', '.nextButton', generateQuestions);

$(main);