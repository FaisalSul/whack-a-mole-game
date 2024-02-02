const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time')
const btn = document.querySelector('.btn');

let result = 0;
let hitPosision ;
let timer = 10;
let timerId = null;


function randomSquare(){
    squares.forEach((square)=>{
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    hitPosision = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if (square.id === hitPosision){
            result++;
            score.textContent = result;
            hitPosision = null;
        }
    })
})


function moveMole(){
    timerId = setInterval(randomSquare, 500)
}
btn.addEventListener('click', () =>{
    moveMole()
    function countDown(){
        timer--
        timeLeft.textContent = timer;
    
        if(timer == 0 ){
            
            clearInterval(countDownTimerId);
            clearInterval(timerId);
            alert(`Game over your final score is ${result}`)
            btn.textContent = 'Play Agian';
            score.textContent = 0;
            result = 0;
            timer = 10;
            timeLeft = 10;
            
        }
        btn.textContent = 'Play Game';
    }
    
    let countDownTimerId = setInterval(countDown, 1000)
})


