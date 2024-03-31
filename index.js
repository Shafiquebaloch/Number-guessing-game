#! /usr/bin/env node
import inquirer from "inquirer";
//Math.ramdom is used for generete a random number.
const randomNumber = Math.floor(Math.random() * 7); //Math.floor is used for round off to numerical values.
const guessNumber = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Dear User plz guess a Desired Number betweem 0-7",
    }
]);
console.log(guessNumber);
if (guessNumber.userGuessedNumber == randomNumber) {
    console.log("Congrates You Have been Guessed Right Number");
}
else {
    console.log("wrong Number ");
}
