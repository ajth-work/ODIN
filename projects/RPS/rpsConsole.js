function computerPlay() {
    // the computer randomly returns either "rock", "paper", or "scissors"
    let choices, computerChoice;
    choices = ["rock", "paper", "scissors"]
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`Computer has made its move.`);
    return computerChoice;
};

function playerPlay() {
    // the player types their move, and if it is a simplified response, then the function renames it to the full move name for clarity
    let playerChoice = prompt("Type Rock (r), Paper (p), or Scissors (s), please!").toLowerCase();
    let playerChoiceRename;
    if (playerChoice[0] == "r") {
        playerChoiceRename = "rock";
    } else if (playerChoice[0] == "p") {
        playerChoiceRename = "paper";
    } else if (playerChoice[0] == "s") {
        playerChoiceRename = "scissors";
    }
    console.log(`Player chose [${playerChoiceRename}].`)
    return playerChoiceRename;
};

function playRPS(computerSelection, playerSelection) {
    // receives the inputs from the computer and the player, and evaluates whether the player won, lost, or tied against the computer
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let roundResult;
    if (
        (playerSelection[0] == "r" && computerSelection[0] == "s")
        || (playerSelection[0] == "p" && computerSelection[0] == "r")
        || (playerSelection[0] == "s" && computerSelection[0] == "p")
    ) {
        roundResult = "win";
        console.log(`You won! You chose [${playerSelection}] and Computer chose [${computerSelection}].`)
    } else if (playerSelection[0] == computerSelection[0]) {
        roundResult = "tie";
        console.log(`You tied. You and Computer both chose [${computerSelection}].`)
    } else {
        roundResult = "lose";
        console.log(`You lost! You chose [${playerSelection}] and Computer chose [${computerSelection}].`);
    } return roundResult;
}

function game() {
    // the function asks how many times to play, plays num amount of rounds, displays the entire match's current status, and exits
    num = Number(prompt("How many times would you like to play? (numbers only, please)"));
    let winCount = 0, loseCount = 0, tieCount = 0;
    for (let i = 0; i < num; i++) {
        let resultWord = playRPS();
        if (resultWord == "win") {
            winCount++;
        } else if (resultWord == "lose") {
            loseCount++;
        } else if (resultWord == "tie") {
            tieCount++;
        }
        console.log(`Wins: ${winCount} | Loses: ${loseCount} | Ties: ${tieCount} || Round(s) Remaining: ${(num - i) - 1}`);
    } return alert(`${num} round(s) completed! You won ${Math.floor(((winCount / num) * 100))}% of the round(s). Thanks for playing.`);
}; 

console.log(game());