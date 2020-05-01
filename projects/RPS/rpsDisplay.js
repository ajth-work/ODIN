function computerPlay() {
    // the computer randomly returns either "rock", "paper", or "scissors"
    let choices, computerChoice;
    choices = ["rock", "paper", "scissors"]
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

function playRPS(playerSelection) {
    // receives the inputs from the computer and the player, and evaluates whether the player won, lost, or tied against the computer
    let roundResult;
    computerSelection = computerPlay();
    if (
        (playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        roundResult = "win";
        resultsInfo.textContent = `You won! You chose [${playerSelection}] and Computer chose [${computerSelection}].`;
    } else if (playerSelection == computerSelection) {
        roundResult = "tie";
        resultsInfo.textContent = `You tied. You and Computer both chose [${computerSelection}].`
    } else {
        roundResult = "lose";
        resultsInfo.textContent = `You lost! You chose [${playerSelection}] and Computer chose [${computerSelection}].`;
    } return roundResult;
};

let btnResponse;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (button.id) {
            case "rock-button":
                btnResponse = "rock";
                break;
            case "paper-button":
                btnResponse = "paper";
                break;
            case "scissors-button":
                btnResponse = "scissors";
                break;
        }
        return playRPS(btnResponse);
    });
});

const resultsDivHeader = document.createElement('resultsDivHeader');
resultsDivHeader.textContent = "Round Results: ";
resultsDivHeader.style.cssText = "color: red; font-size: 20px; paddingBottom: 20px;";
body.appendChild(resultsDivHeader);

const linebreak = document.createElement('br');
body.appendChild(linebreak);

const resultsInfo = document.createElement('resultsInfo');
body.appendChild(resultsInfo);


