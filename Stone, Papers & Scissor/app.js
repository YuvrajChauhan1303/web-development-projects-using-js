let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML =
    getWord(userChoice) + " beats " + getWord(compChoice) + " You Win! 🍺 ";
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML =
    getWord(compChoice) + " beats " + getWord(userChoice) + " You LOST!  🥲";
}

function draw(userChoice, compChoice) {
  result_p.innerHTML = "DRAW! You had the same choices!";
}

function getWord(userChoice) {
  if (userChoice === "r") return "Stone";
  else if (userChoice === "s") return "Scissors";
  else if (userChoice === "p") return "Paper";
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function choice(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
  }
}


function main() {
  rock_div.addEventListener("click", function () {
    choice("r");
  });

  paper_div.addEventListener("click", function () {
    choice("p");
  });

  scissors_div.addEventListener("click", function () {
    choice("s");
  });
}

main();
