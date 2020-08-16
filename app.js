$(main);'use strict';

//Generate main page 
function generateMainPage() {
  const h1 = '<h1>Are you ready for some coding questions?</h1>';
  const h3 = '<h3>Click the button to get started</h3>';
  const button = '<button class="button start" type="button">Start</button>';

  const html = `${h1}${h3}${button}`;
  renderQuiz(html);

STORE.quizStarted = true;
}


//Generate the questions
function nextQuestion() {
    let questionNumber = STORE.questionNumber
    let question = STORE.questions[questionNumber];

    if (questionNumber >= 5) {
           return endOfGame()
        }
        let numberWrong = STORE.wrong;
        const questionNumberHtml = `<div class='questionNumber'>Question ${questionNumber + 1}/5</div>`
        const trackScore =`<div class='trackScoreHtml'>${STORE.score}/${questionNumber} correct</div>
        <div class='trackScoreHtml'>${numberWrong}/${questionNumber} wrong</div>`;
        const questionAndScore = `<div class = 'question-score'>${questionNumberHtml}${trackScore}</div>`

        const questionHtml = `<div class ="box"> 
            <h3 class= "question"> ${question.question} </h3>
        <form class="form" >
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
          <button class="checkAnswer" type="submit" id="submit">submit</button>

    </form>
    </div>`;

    renderQuiz(`${questionAndScore}${questionHtml}`);
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
  STORE.score = 0;
  STORE.questionNumber = 0;
  STORE.wrong = 0;
  STORE.right = 0;
  generateMainPage();

}



//render the page
function renderQuiz(html) {
    $("main").html(html)
}



function correct(){
  let numberWrong = STORE.wrong;
  let questionNumber = STORE.questionNumber + 1;
  const questionNumberHtml = `<div class='questionNumber'>Question ${questionNumber}/5</div>`
  const trackScore =`<div class='trackScoreHtml'>${STORE.score}/${questionNumber} correct</div>
  <div class='trackScoreHtml'>${numberWrong}/${questionNumber} wrong</div>`;
  const questionAndScore = `<div class = 'question-score'>${questionNumberHtml}${trackScore}</div>`
  const button = `
            <button class="button next-button" type="button">Next Question</button>`



  const correctHtml = `${questionAndScore}<h2>That's correct!</h2>${button}`;

  renderQuiz(correctHtml);
}

function wrong(){
    
  let numberWrong = STORE.wrong;
  let questionNumber = STORE.questionNumber + 1;
  console.log(questionNumber);
  const questionNumberHtml = `<div class='questionNumber'>Question ${questionNumber}/5</div>`
  const trackScore =`<div class='trackScoreHtml'>${STORE.score}/${questionNumber} correct</div>
  <div class='trackScoreHtml'>${numberWrong}/${questionNumber} wrong</div>`;
  const questionAndScore = `<div class = 'question-score'>${questionNumberHtml}${trackScore}</div>`
  
  const correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  const button = `
            <button class="button next-button" type="button">Next Question</button>`

  const wrongHtml = `${questionAndScore}<h2>That's the wrong answer</h2><div class = 'correctAnswer'><h4>The correct answer is:</h4><h4>${correctAnswer}</h4>${button}</div>`;
  
  
  renderQuiz(wrongHtml);
}

//submit answer
function answerSubmit(event) {
    event.preventDefault();
    let answer = $("input[name=answers]:checked").val();
    
    if (!answer){
      return nextQuestion();
    }
    if (answer === STORE.questions[STORE.questionNumber].correctAnswer) {
        STORE.score++;
        STORE.right++;
        correct();
        //should iterate 
    }else if (STORE.questions[STORE.questionNumber].correctAnswer) {
      STORE.wrong++;
      wrong();
      }

      STORE.questionNumber++;
  
}



function main() {
  generateMainPage();
}

//event Handler for the submit button
$('main').on('click', '.button', nextQuestion);

$('main').on('submit', 'input', answerSubmit);

$('main').on('click', '.checkAnswer', answerSubmit);

$('main').on('click', '.play-again', playAgain);





$(main);