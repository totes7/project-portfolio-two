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
    question.innerText = 'Which of these teams has won the most World Cups in football history?';

    let answerA = document.getElementById('answer-a');
    answerA.innerText = 'Germany';
    let answerB = document.getElementById('answer-b');
    answerB.innerText = 'Italy';
    let answerC = document.getElementById('answer-c');
    answerC.innerText = 'Brazil';
    let answerD = document.getElementById('answer-d');
    answerD.innerText = 'France';
}