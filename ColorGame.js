let COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let guess;
let correct = false;
const targetIndex = Math.floor(Math.random()*10);
const target = COLORS_ARRAY[targetIndex];

function runGame() {
    console.log(target);
};

function checkGuess(guess, target) {

};