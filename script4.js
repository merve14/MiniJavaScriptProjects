const prompt = require("prompt-sync")();

const question = prompt("Would you like to play (y/n)? ");

if (question.toLowerCase() === "y") {
  const question2 = prompt("Would you like to go right or left (right/left)? ");
  if (question2.toLowerCase() === "left") {
    console.log("Oops, you went left and fall of a bridge! You lost!");
  } else {
    //right
    console.log("Nice! You went right and approached a bridge...");
    const question3 = prompt(
      "Would you like to cross the bridge or turn around and find another way (cross/turn)? "
    );
    if (question3.toLowerCase() === "cross") {
      console.log("You've crossed the bridge and reached the end of the game!");
    } else {
      console.log(
        "You turned back and triped on a log and hurt your leg. You loose."
      );
    }
  }
} else {
  console.log("That's too bad!");
}
