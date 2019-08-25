var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userPick = [];
var wins = 0;
var losses = 0;
var userGuesses = [];
var computerPick = [];
var guessesLeft = 9;

computerPick = letters[Math.floor(Math.random() * letters.length)];
console.log(computerPick)

document.onkeyup = function (event) {

    userPick = event.key;
    console.log(userPick)
    userGuesses.push(userPick);
    console.log(userGuesses)


    if (userPick === computerPick) {
        wins++;
        guessesLeft = 9;
        UserGuesses= [];
        computerPick = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerPick)
        console.log(guessesLeft)
        console.log(wins)
    }
    else {
        guessesLeft--;
        console.log(guessesLeft)
    }

    if (guessesLeft === 0) {
        losses++;
        userGUesses = [];
        guessesLeft = 9;
        computerPick = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerPick)
    }
}
