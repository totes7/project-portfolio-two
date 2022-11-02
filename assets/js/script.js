let questions = [
    {
        prompt: 'Which of these teams has won the most World Cups in football history?',
        answers: ['Brazil', 'Italy', 'France', 'Germany']
    },
    {
        prompt: 'Which of these players has scored more goals in World Cup history?',
        answers: ['Miroslav Klose', 'Ronaldo', 'Roberto Baggio', 'Lionel Messi']
    },
    {
        prompt: 'Which continent has hosted more World Cups?',
        answers: ['Europe', 'Asia', 'Africa', 'Americas']
    },
    {
        prompt: 'Who is the only player to win 3 World Cups?',
        answers: ['Pelé', 'Diego Maradona', 'Francesco Totti', 'Franz Beckenbauer']
    },
    {
        prompt: 'Which of these teams has lost the World Cup final the most times?',
        answers: ['Germany', 'Argentina', 'England', 'Uruguay']
    },
    {
        prompt: 'Who won the first ever World Cup?',
        answers: ['Uruguay', 'Italy', 'Brazil', 'Messico']
    },
    {
        prompt: 'Who is the oldest player to play and score in a World Cup at age 42?',
        answers: ['Roger Milla', 'Miroslav Klose', 'Diego Maradona', 'Michel Platini']
    },
    {
        prompt: 'Who scored the fastest goal in World Cup history, after just 11 seconds?',
        answers: ['Hakan Sukur', 'Pelé', 'Harry Kane', 'Cristiano Ronaldo']
    },
    {
        prompt: 'Who is the only coach to win 2 World Cups?',
        answers: ['Vittorio Pozzo', 'Felipe Scolari', 'Fabio Capello', 'Vicente del Bosque']
    },
    {
        prompt: 'Australia won a World Cup qualifying match for 31-0. Who did they win against?',
        answers: ['American Samoa', 'Fiji', 'Japan', 'New Zeland']
    },
]



// Wait for the DOM to finish loading before starting the quiz

document.addEventListener('DOMContentLoaded', function() {
    let start = document.getElementById('start');
    start.addEventListener('click', function(){
        let gameArea = document.getElementsByClassName('game-area');
        gameArea[0].style.display = 'inline-block';
        displayQuestionOne();
    })

    let toggler = document.getElementById('menu-toggler');
    toggler.addEventListener('click', function() {
        let menu = document.getElementsByClassName('menu');

        if (menu[0].style.transform == 'translateX(80%)') {
        toggler.innerText = '- Menu';
        menu[0].style.transform = 'translateX(0)';
        } else {
            toggler.innerText = '+ Menu';
        menu[0].style.transform = 'translateX(80%)';
        }
    })
})


function displayQuestionOne() {
    let question = document.getElementById('question');
    question.innerText = questions[0].prompt;

    let answerA = document.getElementById('answer-a');
    answerA.innerText = questions[0].answers[0];
    let answerB = document.getElementById('answer-b');
    answerB.innerText = questions[0].answers[1];
    let answerC = document.getElementById('answer-c');
    answerC.innerText = questions[0].answers[2];
    let answerD = document.getElementById('answer-d');
    answerD.innerText = questions[0].answers[3];
}