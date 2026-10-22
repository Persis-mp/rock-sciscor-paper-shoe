// Possible moves in the game.
const choices = ["rock", "paper", "scissors"];

let wins = 0;
let draws = 0;
let losses = 0;

// Play one round.
function playGame(playerChoice) {
  // Select a random move for the computer.
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let message;

  // Compare the player's move with the computer's move.
  if (playerChoice === computerChoice) {
    message = "It's a draw!";
    draws++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message = "You win!";
    wins++;
  } else {
    message = "Computer wins!";
    losses++;
  }

  // Show the moves and result.
  document.getElementById("moves").textContent =
    "Your move: " + playerChoice +
    " | Computer: " + computerChoice;

  document.getElementById("result").textContent = message;

  // Update the scores.
  document.getElementById("wins").textContent = wins;
  document.getElementById("draws").textContent = draws;
  document.getElementById("losses").textContent = losses;
}

// Add a click event to each choice button.
document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", function () {
    playGame(button.dataset.choice);
  });
});

// Reset the scores.
document.getElementById("reset").addEventListener("click", function () {
  wins = 0;
  draws = 0;
  losses = 0;

  document.getElementById("wins").textContent = 0;
  document.getElementById("draws").textContent = 0;
  document.getElementById("losses").textContent = 0;

  document.getElementById("moves").textContent =
    "Your move: — | Computer: —";

  document.getElementById("result").textContent = "Make your choice!";
});
