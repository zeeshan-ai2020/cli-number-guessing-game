#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number between 1-6:",
},
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulatios! You Guessed Right Number.");
} else{
    console.log("You Guessed Wrong Number.");
}
