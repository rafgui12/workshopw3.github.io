let COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let guess;
let correct = false;
const targetIndex = Math.floor(Math.random()*10);
const target = COLORS_ARRAY[targetIndex];

function runGame() {
    console.log(target)
    do {
        if(guess === null){
            correct = true;
        }else{
            guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY +
                '\n\nWhat color am I thinking of?\n');
            checkGuess (guess, target);
        }
      } while (correct === false);
};

function checkGuess(guess, target) {

    console.log(COLORS_ARRAY.indexOf(guess))
    console.log(COLORS_ARRAY.indexOf(target))

    if(COLORS_ARRAY.indexOf(guess) < 0){

        alert("Color not recognized")
        console.log("No esta en la lista");

    }else if(COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)){

        console.log("Es esta abajo del color de la lista");
        alert("guess is incorrect & is higher than target");

    }else if(COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)){

        console.log("Es esta por arriba del color de la lista");
        alert("guess is incorrect & is lower than target");

    }else{

        alert("Congratulations!")
        correct = true;

    }

};