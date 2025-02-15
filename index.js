const randomNumber = parseInt(Math.random() *100 +1);



const GuessRecord = document.querySelector('#guess');
const RemGuess = document.querySelector('#rem');
const ReplyOfSubmit = document.querySelector('.reply');
const UserInput = document.querySelector('#input'); 
const Submit = document.querySelector('#subt'); 

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
let i =0;

if(playGame){
    Submit.addEventListener('click' , function(e){
        e.preventDefault();

        const guessedNum = parseInt(UserInput.value);
        UserInput.value = null;

        InputAuthentication(guessedNum);
        showGuesses();

        let m = parseInt(RemGuess.innerHTML);
        if(m>0){
            m = m-1;
        }

        DisplayMessage(guessedNum,m);
        NoOfGuessLeft(m);
        if(m<=0|| (!playGame)){
            GameOver();
        }
        

    })
}

function GameOver(){
   UserInput.setAttribute('disabled', '');
   p.classList.add('p');
   p.innerHTML = ` <h2 id = "newGame"> Start Again</h2>`;
   p.style.color = 'blue';
   ReplyOfSubmit.appendChild(p);
   playGame = 'false';
   newGame();
}

function newGame(){
        const newGameBtn = document.querySelector('#newGame');
        newGameBtn.addEventListener('click', function(e){
            window.location.reload();
        })

}

function showGuesses() {
    let n = prevGuess.length;
    for(; i<n; i++){
        GuessRecord.innerHTML = GuessRecord.innerHTML + prevGuess[i] + ',' ;
    }
    
}

function NoOfGuessLeft(m) {
   
    console.log(m);
    
    RemGuess.innerHTML = m;
}
function InputAuthentication(guessedNum) {
    if(isNaN(guessedNum) || guessedNum == null || guessedNum > 100 || guessedNum < 1){
       alert("Please enter a valid input!!! or in range of 1 to 100");
    }
    else{
        let x =  prevGuess.length;
        if(x<10){
            prevGuess.push(guessedNum);
        }
       
    }
}
function DisplayMessage(guessedNum,m) {
    if(m <= 0){
        ReplyOfSubmit.innerHTML = 'UHH OH, Your attempts are Over. Random Number is '+ randomNumber;
        ReplyOfSubmit.style.color = 'red';
     }
     else{
        if(guessedNum == randomNumber ){
            ReplyOfSubmit.innerHTML = 'Congrats, You guessed it right. Random Number is '+ randomNumber;
            playGame = false;
        }
        else if(guessedNum > randomNumber ){
            ReplyOfSubmit.innerHTML = 'You are guessing too high number. Please try to guess small value ';
        }  
        else{
                ReplyOfSubmit.innerHTML = 'You are guessing too low number. Please try to guess large value ';
        }
           
     }
    
    
}
