'use strict';

//Generate main page 
function generateMainPage() {
    const mainHtml = ` <div class="startPage">
        <h1> Are you ready for some Coding questions? Click the button to get started! </h1>
    
        <div>
            <button class="button main-button" type="button">Start</button>
        </div>
</div>`;
renderQuiz(mainHtml);
STORE.quizStarted = true;
}


//Generate the questions
function nextQuestion() {
    let questionNumber = STORE.questionNumber
    let question = STORE.questions[questionNumber];

    if (questionNumber >= 5) {
           return endOfGame()
        }
        let numberWrong = questionNumber - STORE.score;
        const questionNumberHtml = `<div class='questionNumber'>Question ${questionNumber + 1}/5</div>`
        const trackScore =`<div class='trackScoreHtml'>${STORE.score}/${questionNumber} correct</div>
        <div class='trackScoreHtml'>${numberWrong}/${questionNumber} wrong</div>`

        const questionHtml = `<div class ="box"> 
            <h3 class= "question"> ${question.question} </h3>
        <form class="form" id="submit">
          <div class="radioButton">
            <input type="radio" id="ans1" name="answers" value="${question.answers[0]}">
            <label for="ans1">${question.answers[0]}</label><br>
          </div>
          <div class="radioButton">
            <input type="radio" id="ans2" name="answers" value="${question.answers[1]}">
            <label for="ans2">${question.answers[1]}</label>
          </div>
          <div class="radioButton">
            <input type="radio" id="ans3" name="answers" value="${question.answers[2]}">
            <label for="ans3">${question.answers[2]}</label>
          </div>
          <div>
            <input type="radio" id="ans4" name="answers" value="${question.answers[3]}">
            <label for="ans4">${question.answers[3]}</label></br> 
          </div>
    </form>
    </div>`;

    renderQuiz(`${trackScore}${questionNumberHtml}${questionHtml}`);
}

//function that contains the HTML this should show the questions on the page
function endOfGame() {
          //set up event listener to call
          //render main page
  const endHtml = `<div class = "endofGame">
                    <h1> End of quiz!</h1>
                        <h3>You got ${STORE.score} correct!</h3>
                        <button class="button main-button play-again" type="button">Play again</button>
        </div >`;    
        renderQuiz(endHtml);
        
}


function playAgain(event){
  STORE.quizStarted = false;
  STORE.questionNumber = 0;
  generateMainPage();

}



//render the page
function renderQuiz(html) {
    $("main").html(html)
}


//main function
function main() {
    generateMainPage();
}


//submit answer
function answerSubmit(event) {
    event.preventDefault();
    let answer = $("input[name=answers]:checked", ).val();
    console.log(answer);
    if (STORE.questions[STORE.questionNumber].correctAnswer == answer) {
        STORE.score++
        alert("You are right");
        //should iterate 
    }
    else {
        alert("You are wrong!");   
    }

    STORE.questionNumber++;
    console.log(STORE.score);
    nextQuestion();
}


//item complete function
function itemComplete() {
    console.log($(this).parent());
    alert("completed");
    answerSubmit;
}


//event Handler for the submit button
$('main').on('click', 'button', nextQuestion);
//event handlers on submitting the form go to next question
$('main').on('click', '#submit', answerSubmit);

$('main').on('click', '.play-again', playAgain);





$(main);