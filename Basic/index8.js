const readline = require('readline');

const randomNumber = Math.floor(Math.random() * 10) + 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Guess the number between 1 and 10: ", (userInput) => {
    const userGuess = parseInt(userInput);

    if (userGuess === randomNumber) {
        console.log("Good Work");
    } else {
        console.log(`Not matched. The correct number was ${randomNumber}`);
    }

    rl.close();
});
