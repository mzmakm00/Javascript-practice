// Require the readline module to get user input
const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const variables = {};

function createVariable(name, value) {

    variables[name] = value;
}


function getVariableValue(name) {
    return variables[name];
}

rl.question("Enter the variable name: ", function(name) {
  rl.question("Enter the variable value: ", function(value) {

    createVariable(name, value);

    console.log("Value of", name, "is:", getVariableValue(name));


    rl.close();
  });
});
