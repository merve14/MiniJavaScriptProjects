const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswerPoints = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer = "CPU";

if (answer1.toUpperCase() === correctAnswer) {
  console.log("You got it correct!");
  correctAnswerPoints++;
} else {
  console.log("You got it wrong!");
}

const answer2 = prompt("What is better a 3090ti or 4060? ");
const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswerPoints++;
} else {
  console.log("You got it wrong!");
}

const answer3 = prompt("What is the recommended amount of RAM in 2023? ");
const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswerPoints++;
} else {
  console.log("You got it wrong!");
}
const percent = Math.round((correctAnswerPoints / totalQuestions) * 100);
console.log("You got", correctAnswerPoints, "questions correct!");
console.log("And you got", percent.toString() + "%");
