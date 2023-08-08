const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
  guesses++;
  const guess = Number(prompt("Guess a number (0-100): "));
  if (guess < target) {
    console.log("Your guess is too low!");
  } else if (guess > target) {
    console.log("Your guess is too high!");
  } else {
    console.log("You guessed it right!");
    break;
  }
}
console.log("You guessed the number in", guesses, "tries");
