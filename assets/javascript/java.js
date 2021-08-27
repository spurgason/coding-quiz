const startButton = document.getElementById("start-btn")
const highButton = document.getElementById('highscore')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-btns')
const clockEl = document.getElementById('counter')
const timerEl = document.getElementById('timer')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
answerButtonEl.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

// starts game
function startGame() {
    startButton.classList.add('hide')
    highButton.classList.add('hide')
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
// Array.from(answerButtonEl.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
// })
if(shuffledQuestions.lenght > currentQuestionIndex + 1){
   
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
function countdown(){
    var timeLeft = 30

    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else if (timeLeft === 1){
            timerEl.textContent = timeLeft +' second remaining';
            timeLeft--;
        } else{
            timerEl.textContent = 'Time is up';
            clearInterval(timeInterval);

        }
    }, 1000)
}


const questions = [
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