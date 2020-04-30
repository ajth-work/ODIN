function computerPlay() {
    // the computer randomly returns either "rock", "paper", or "scissors"
    let choices, computerChoice;
    choices = ["rock", "paper", "scissors"]
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
	console.log(`Computer chose [${computerChoice}].`);
	return computerChoice;
};
let btnResponse;
function playerPlay(btnResponse) {
    // the player types their move, and if it is a simplified response, then the function renames it to the full move name for clarity
    let playerChoice = btnResponse;
    console.log(`Player chose [${playerChoice}].`);
    return playerChoice;
};

function playRPS(computerSelection, playerSelection) {
    // receives the inputs from the computer and the player, and evaluates whether the player won, lost, or tied against the computer
    let roundResult;
    if ((computerPlay()!= undefined) && (playerPlay(btnResponse) != undefined)) {
	if (
        (playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        roundResult = "win";
        console.log(`You won! You chose [${playerSelection}] and Computer chose [${computerSelection}].`)
    } else if (playerSelection == computerSelection) {
        roundResult = "tie";
        console.log(`You tied. You and Computer both chose [${computerSelection}].`)
    } else {
        roundResult = "lose";
        console.log(`You lost! You chose [${playerSelection}] and Computer chose [${computerSelection}].`);
    } return roundResult;
} else {
	if (computerPlay()!= undefined) {alert("press start")}
	else alert("choose between rock, paper, or scissors");
}
};

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

	const startButton = document.getElementById("start-button");
	startButton.addEventListener('click', () => {
		computerPlay();
	});
	
	const rockButton = document.getElementById("rock-button");
	rockButton.addEventListener('click', () => {
	alert("You chose rock.")
	btnResponse = "rock";
	console.log(btnResponse)
	return btnResponse;
});
	const paperButton = document.getElementById("paper-button");
	paperButton.addEventListener('click', () => {
	alert("You chose paper.")
	btnResponse = "paper";
	console.log(btnResponse)
	return btnResponse;
});
	const scissorsButton = document.getElementById("scissors-button");
	scissorsButton.addEventListener('click', () => {
	alert("You chose scissors.")
	btnResponse = "scissors";
	console.log(btnResponse)
	return btnResponse;
});

const submitButton = document.getElementById("round-count-submit-button");
	submitButton.addEventListener('click', () => {
		playRPS();
	});