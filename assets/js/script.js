// Wait for the DOM to finish loading before starting the quiz

document.addEventListener('DOMContentLoaded', function() {
    let start = document.getElementById('start');
    start.addEventListener('click', function() {
        console.log('hi');
        let gameArea = document.getElementsByClassName('game-area');
        gameArea[0].style.display = 'inline-block';
        runGame();
    })
})

let questions = [
    {
        prompt: 'Which of these teams has won the most World Cups in football history?',
        answers: ['Italy', 'France', 'Brazil', 'England']
    },
    {
        prompt: 'Which of these players has scored more goals in World Cup history?',
        answers: ['Ronaldo', 'Miroslav Klose', 'Roberto Baggio', 'Lionel Messi']
    },
    {
        prompt: 'Which continent has hosted more World Cups?',
        answers: ['Asia', 'Africa', 'Americas', 'Europe']
    },
    {
        prompt: 'Who is the only player to win 3 World Cups?',
        answers: ['Diego Maradona', 'Pelé', 'Francesco Totti', 'Franz Beckenbauer']
    },
    {
        prompt: 'Which of these teams has lost the World Cup final the most times?',
        answers: ['Argentina', 'England', 'Germany', 'France']
    },
    {
        prompt: 'Who won the first ever World Cup?',
        answers: ['Italy', 'Uruguay', 'Tunisia', 'Messico']
    },
    {
        prompt: 'Who is the oldest player to play and score in a World Cup at age 42?',
        answers: ['Luca Toni', 'Diego Maradona', 'Roger Milla', 'Michel Platini']
    },
    {
        prompt: 'Who scored the fastest goal in World Cup history, after just 11 seconds?',
        answers: ['Gerd Müller', 'Harry Kane', 'Cristiano Ronaldo', 'Hakan Sukur']
    },
    {
        prompt: 'Who is the only coach to win 2 World Cups?',
        answers: ['Felipe Scolari', 'Vittorio Pozzo', 'Fabio Capello', 'Vicente del Bosque']
    },
    {
        prompt: 'Australia won a World Cup qualifying match for 31-0. Who did they win against?',
        answers: ['Fiji', 'Japan','American Samoa',  'New Zeland']
    },
];


function runGame() {
    //get the random question
    let question = questions[Math.floor(Math.random()*questions.length)];
        displayQuestion(question);
        checkAnswer();
}


function displayQuestion(x) {
    
    let question = document.getElementById('question');
    question.innerText = x.prompt;

    let answerA = document.getElementById('answer-a');
    answerA.innerText =x.answers[0];
    let answerB = document.getElementById('answer-b');
    answerB.innerText =x.answers[1];
    let answerC = document.getElementById('answer-c');
    answerC.innerText =x.answers[2];
    let answerD = document.getElementById('answer-d');
    answerD.innerText =x.answers[3];
}

function checkAnswer() {
    let correctAnswers = ['Brazil', 'Miroslav Klose', 'Europe', 'Pelé', 'Germany', 'Uruguay', 'Roger Milla', 'Hakan Sukur', 'Vittorio Pozzo', 'American Samoa'];
    let answer = document.getElementsByClassName('answer');
    
    for (let i = 0; i < answer.length; i++) {
        answer[i].addEventListener('click', function() {
            if (correctAnswers.includes(answer[i].innerText)) {
                answer[i].style.backgroundColor = 'green';
                let question = questions[Math.floor(Math.random()*questions.length)];
                setTimeout(() => {answer[i].style.backgroundColor = 'whitesmoke';}, 900);
                setTimeout(() => {displayQuestion(question);}, 1000);
            } else {
                answer[i].style.backgroundColor = 'red';
                let lives = document.getElementById('l-num');
                let n = document.getElementById('l-num').innerText;
                lives.innerText = n - 1;
                let question = questions[Math.floor(Math.random()*questions.length)];
                setTimeout(() => {answer[i].style.backgroundColor = 'whitesmoke';}, 900);
                setTimeout(() => {displayQuestion(question);}, 1000);
            }
        
        })
    }

}

// Menu toggler 

let menu = document.getElementsByClassName('menu');
menu[0].style.transform = 'translateX(85%)';
let toggler = document.getElementById('menu-toggler');
toggler.addEventListener('click', function() {  
    if (menu[0].style.transform == 'translateX(85%)') {
    toggler.innerText = '- Menu';
    menu[0].style.transform = 'translateX(0)';
    } else {
        toggler.innerText = '+ Menu';
    menu[0].style.transform = 'translateX(85%)';
    }
})

// Trophy history open and close button

let openButton = document.getElementById('trophy-btn');
openButton.addEventListener('click', function() {
    let trophyHistory = document.getElementsByClassName('trophy-history');
    trophyHistory[0].style.display = 'inline-block';
})

let closeButton = document.getElementById('close-trophy');
closeButton.addEventListener('click', function() {
    let trophyHistory = document.getElementsByClassName('trophy-history');
    trophyHistory[0].style.display = 'none';
})