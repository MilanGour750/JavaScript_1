let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput  = document.querySelector('#guessField');
const guessSlot  = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const startOver  = document.querySelector('.resultParas');
const lowOrHi  = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let numGuess = 1;
let prevGuess = [];

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        ValidateGuess(guess);
    })
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number');
    } else if(guess<1){
        alert('Please Enter a valid number greater than 1');
    } else if(guess>100){
        alert('Please Enter a valid number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            DisplayMsg(`Game Over. Random Number was ${randomNumber}`);
            EndGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        DisplayMsg(`You Guess it right !!`)
    }
    else if(guess<randomNumber){
        DisplayMsg(`Number is too LOW`)
    }
    else if(guess>randomNumber){
        DisplayMsg(`Number is too LOW`)
    }
}

function displayGuess(guess ){
    userInput.value ='';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function EndGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newgameButton = document.querySelector('#newGame');
    newgameButton.addEventListener('click', function(e){

        randomNumber = parseInt(Math.random() * 100 + 1); 
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

