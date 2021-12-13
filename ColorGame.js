let COLORS_ARRAY = ['magenta', 'gray', 'blue', 'yellow', 'cyan', 'gold',  'green', 'orange', 'red', 'white'];
let ColorSort = COLORS_ARRAY.sort();
var ColorSting = ColorSort.toString().split(",").join(", ")
let guess;
let correct = false;
const targetIndex = Math.floor(Math.random()*10);
const target = ColorSort[targetIndex];
let numTries = 0; 

function runGame() {
    do {
        guess = prompt('I am thinking of one of these colors:\n\n'+ ColorSting +'\n\nWhat color am I thinking of?\n');
        if(guess === null){
            correct = true;
        }else{
            let guessLower = guess.toLowerCase();
            checkGuess(guessLower, target);
        }
      } while (correct === false);
};

function checkGuess(guess, target) {

    if(ColorSort.indexOf(guess) < 0){

        alert('Color not recognized & you has tried: '+numTries)
        numTries ++

    }else if(ColorSort.indexOf(guess) < ColorSort.indexOf(target)){

        alert('guess is incorrect & is higher than target & you has tried: '+numTries);
        numTries ++

    }else if(ColorSort.indexOf(guess) > ColorSort.indexOf(target)){

        alert('guess is incorrect & is lower than target & you has tried: '+numTries);
        numTries ++

    }else{

        alert('Congratulations!, you guess in '+numTries+' tries')
        document.body.style.background = guess; 
        document.getElementById("start").disabled = 'true';
        return correct = true;
    }

};
function restartGame(){
    location.reload();
};