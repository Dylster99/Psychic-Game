const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessesleft = 9;
let guessedletters = [];


document.onkeydown = function (event) {

    guessesleft--;

    guessedletter = event.key;

    guessedletters.push(guessedletter);

    guessesleftfunction();

    guessessofarfunction();

    if (guessedletter === pickedletter) {

        wins++;

        document.querySelector("#wins").innerHTML = "Wins: " + wins;

        reset();
    }

    if (guessesleft === 0) {

        losses++;

        document.querySelector("#losses").innerHTML = "Losses: " + losses;

        reset();
    }
};

function guessesleftfunction() {
    document.querySelector("#guesses").innerHTML = "Guessesleft: " + guessesleft;
};

function guessessofarfunction() {
    document.querySelector("#guessessofar").innerHTML = "Guessed Letters: " + guessedletters.join(", ");
};

function getrandomletter() {
    pickedletter = alphabet[Math.floor(Math.random() * alphabet.length)];
};
getrandomletter();
console.log(getrandomletter());

function reset() {
    guessesleft = 9;
    guessedletters = [];
    getrandomletter();
    guessessofarfunction();
    guessesleftfunction();
  };