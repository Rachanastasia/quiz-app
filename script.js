'use strict';

//Generate the main page
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
    let questionNumber = STORE.questionNumber;
    let question = STORE.questions[questionNumber];

    if (questionNumber === 5) {
           return endOfGame();
        }

        const questionNumberHtml = `<div class='number'>${questionNumber}/5`;
        

        const questionHtml = `<div class ="box"> 
            <h3 class= "question"> ${question.question} </h3>
        <form class="form">
          <input type="radio" id="ans1" name="answers" value="${question.answers[0]}">
          <label for="ans1">${question.answers[0]}</label><br>
          <input type="radio" id="ans2" name="answers" value="${question.answers[1]}">
          <label for="ans2">${question.answers[1]}</label>
          <input type="radio" id="ans3" name="answers" value="${question.answers[2]}">
          <label for="ans3">${question.answers[2]}</label>
          <input type="radio" id="ans4" name="answers" value="${question.answers[3]}">
          <label for="ans4">${question.answers[3]}</label>
          </br> <button type="submit" id="submit">Submit</button>
    </form>
    </div>`;

    renderQuiz(questionHtml);
}

function playAgain(event){
  STORE.quizStarted = false;
  generateMainPage();

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
    let answer = $("input[names=correctAnswer]:checked").val();
    if (STORE.questions[STORE.questionNumber].correctAnswer == answer) {
        alert("You are right");
        STORE.score++;
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