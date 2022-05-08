var wins = 0;
var ties = 0;
var losses = 0;
var playAgain = true
var options = ["R", "P", "S"];

while (playAgain) {
  // Ask user for their choice
  var userChoice = prompt("Enter R, P, or S:","R , P or S").toUpperCase();


  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    alert("You lost!");
  }

  // Print stats with line breaks
  alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = confirm("Play again?");

  }