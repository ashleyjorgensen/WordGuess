// variables 
var alphabet = 'ABCDEF';
var right_answer = alphabet[ parseInt(Math.random()*alphabet.length) ];
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessesSoFar = "";

document.onkeyup= myFunction(event) {
    
}

// This variable is defining when the user makes a guess- what's happening when a user inputs a letter.
var make_guess = function()
{
    var userTyped = document.getElementById('guess').value;
    document.getElementById('guess').value = '';
    guessesSoFar = guessesSoFar + userTyped;

    if (userTyped == right_answer)
    {
        wins = wins + 1;
        // reseting the game after the user got the right answer
        guessesSoFar = "";
        guessesLeft = 7;
        right_answer = alphabet[ parseInt(Math.random()*alphabet.length) ];
    }
    else
    {
        guessesLeft = guessesLeft - 1;
        // if your guesses left get down to 0 then the game is over then restart
        if (guessesLeft == 0 )
        {
            losses = losses + 1;
            guessesSoFar = "";
            guessesLeft = 7;
            right_answer = alphabet[ parseInt(Math.random()*alphabet.length) ];
        }

    }
    // documenting what we did in the function and if/else
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = guessesSoFar;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
}
   