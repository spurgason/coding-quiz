const startButton = document.getElementById("start-btn")
const highButton = document.getElementById('highscore')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-btns')
const clockEl = document.getElementById('counter')
const timerEl = document.getElementById('timer')
const highInput = document.getElementById('high-input')
const highSubmit = document.getElementById('high-submit')
const userNameSpan = document.getElementById('user-name')
const userScoreSpan = document.getElementById('user-score')
const highScoreBoard = document.getElementById('highscore-form')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

highButton.addEventListener('click', showHighscore)

answerButtonEl.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

// starts game
function startGame() {
    startButton.classList.add('hide')
    highButton.classList.add('hide')
    highScoreBoard.classList.add('hide')
    clockEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    countdown()
    setNextQuestion()
}
// sets the next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// shows question inside container
function showQuestion(question) {
    questionEl.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    })
}

// resets questions so previous question does not stay
function resetState(){
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

// selecting answer
function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)

if(shuffledQuestions.length > currentQuestionIndex + 1 ){
   
}else{
    stopCountdown();
    highscoreInput();   
}
}

// sets values for questions if they are right or wrong
function setStatusClass(element, correct){
    clearStatusClass(element)
    console.log(correct)
    if (correct){
       console.log("correct")
        element.classList.add('correct')
    } else{
        timeLeft = timeLeft - 5
        console.log('wrong');
        element.classList.add('wrong')
    }
}

// clears right and wrong status for question
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// function for the timer
let timeLeft = 30;
let timeInterval;
function countdown(){
    timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else if (timeLeft === 1){
            timerEl.textContent = timeLeft +' second remaining';
            timeLeft--;
        } else{
            timerEl.textContent = 'Time is up';
            clearInterval(timeInterval);
            highscoreInput()
        }
    }, 1000)
}


function stopCountdown(){
    clearInterval(timeInterval);
}

function highscoreInput(){
    questionEl.classList.add('hide')
    answerButtonEl.classList.add('hide')
    highScoreBoard.classList.remove('hide')

    highSubmit.addEventListener('click',function(event) {
        event.preventDefault();

        var userName = document.querySelector('#high-input').value

        if(userName === ''){
            window.alert('Username cannot be blank');
        }else{
            
        }

        localStorage.setItem('user name', userName)
        localStorage.setItem('score', timeLeft)

        renderLastHighscore()
    })
}

function showHighscore(){
    
    startButton.classList.add('hide')
    highButton.classList.add('hide')
    highInput.classList.add('hide')
    highSubmit.classList.add('hide')
    highScoreBoard.classList.remove('hide')

    renderLastHighscore()
} 

function renderLastHighscore(){
    let userName = localStorage.getItem('user name')
    let userScore = localStorage.getItem('score')

    if(userName === null || userScore === null){
        return;
    }

    userNameSpan.textContent = userName
    userScoreSpan.textContent = userScore
}

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<js>', correct: false },
            { text: '<scripting>', correct: false },
            { text: '<javascript>', correct: false }
        ]
    },
    
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '=', correct: true },
            { text: 'x', correct: false },
            { text: '*', correct: false },
            { text: '-', correct: false }
        ]
    }
]