// Wait for the DOM to finish loading before starting the quiz

document.addEventListener('DOMContentLoaded', function() {
    let start = document.getElementById('start');
    start.addEventListener('click', function(){
        let gameArea = document.getElementsByClassName('game-area');
        gameArea[0].style.display = 'inline-block'
        displayQuestionOne();
    })
})


function displayQuestionOne() {
    let question = document.getElementById('question');
    question.innerText = 'What team has won the most World Cups in football history?'
}