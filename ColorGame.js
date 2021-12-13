let COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
var ColorSting = COLORS_ARRAY.toString().split(",").join(", ")
let guess;
let correct = false;
const targetIndex = Math.floor(Math.random()*10);
const target = COLORS_ARRAY[targetIndex];
let numTries = 0; 

function runGame() {
    console.log(target)
    do {
        guess = prompt('I am thinking of one of these colors:\n\n'+ ColorSting +'\n\nWhat color am I thinking of?\n');
        if(guess === null){
            correct = true;
        }else{
            checkGuess(guess, target);
        }
      } while (correct === false);
};

function checkGuess(guess, target) {

    if(COLORS_ARRAY.indexOf(guess) < 0){

        alert('Color not recognized')
        numTries ++

    }else if(COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)){

        alert('guess is incorrect & is higher than target');
        numTries ++

    }else if(COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)){

        alert('guess is incorrect & is lower than target');
        numTries ++

    }else{

        alert('Congratulations!, you guess in '+numTries+' tries')
        document.body.style.background = guess.toString(); 
        correct = true;

    }

};