'use strict';

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
    

    STORE.quizStarted = true;

    render(startScreenHtml);
}


function generateQuestions() {

    let num = STORE.questionNumber;


    let question = STORE.questions[num].question;
    let answers = STORE.questions[num].answers;
    let name = STORE.questions[num].variables.name;
    let values = STORE.questions[num].variables.value;

    let radioButtons = [];

    for (let i=0; i<answers.length; i++){
        let radio = `<input type="radio" name="${name}" value='${values[i]}'>
        <label for="${values[i]}">${answers[i]}</label><br>`;

        radioButtons.push(radio);
    }

    let allRadioString = radioButtons.join('');

    let submitButton = {
        class: 'submitButton',
        type: 'submit',
        text: 'submit'
    };

    let buttonSubmit = makeButton(submitButton);

    let formattedHTML = `<h3>${question}</h3><form id=${name}>${allRadioString}</form>${buttonSubmit}`;

   return render(formattedHTML);

}

//how do I get the page to re-render immediate feedback on wether answer was right or wrong

function generateCorrect() {
    let heading = "<h1>That's right!</h1>";
    let currentScore = `<h3 class = "score">Your current score is ${STORE.score} / ${STORE.questionNumber}</h3>`;
    let button = {
        class: 'nextButton',
        type: 'button',
        text: 'Next'
    }

    let nextButton = makeButton(button);

    let correctHTML = '';
    
    return render(`${heading}${currentScore}${nextButton}`);


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
    let num = STORE.questionNumber;
    let name = STORE.questions[num].variables.name;
    let values = STORE.questions[num].variables.value;
    let answer = $(`input[name:'${name}']:checked`).val();

    if (answer === STORE.questions[num].correctAnswer) {
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