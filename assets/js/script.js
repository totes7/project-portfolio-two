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
    question.innerText = 'What team has won the most World Cups in football history?'
}