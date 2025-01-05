const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const restartButton = document.getElementById("restartButton")

const playerResultLabel = document.getElementById("playerResultLabel");
const botResultLabel = document.getElementById("botResultLabel");
const finalResultLabel = document.getElementById("finalResultLabel");

const playerScoreDiv = document.getElementById("playerScore");
const botScoreDiv = document.getElementById("botScore");

const playerImg = document.getElementById("playerImg");
const botImg = document.getElementById("botImg");

let playerScore = 0;
let botScore = 0;

const rockPaperScissor = ["Rock", "Paper", "Scissor"]


rockButton.addEventListener("click", () => {
    const playerObject = rockButton.value
    playerResultLabel.innerHTML = playerObject;
    playGame();
    scoreFuntion();
    replaceImg(playerObject, botResultLabel.innerHTML);
})

paperButton.addEventListener("click", () => {
    const playerObject = paperButton.value;
    playerResultLabel.innerHTML = playerObject;
    playGame();
    scoreFuntion();
    replaceImg(playerObject, botResultLabel.innerHTML);
})

scissorButton.addEventListener("click", () => {
    const playerObject = scissorButton.value;
    playerResultLabel.innerHTML = playerObject;
    playGame();
    scoreFuntion();
    replaceImg(playerObject, botResultLabel.innerHTML);
})

restartButton.addEventListener("click", () => {
    restartGame();
})

function scoreFuntion () {
    playerScoreDiv.innerHTML = playerScore;
    botScoreDiv.innerHTML = botScore;
}

function replaceImg (playerObject, botObject) {
    playerImg.src = "img/" + playerObject + ".png";
    botImg.src = "img/" + botObject + ".png";
}

function restartGame() {
    playerResultLabel.innerHTML = "";
    botResultLabel.innerHTML = "";
    finalResultLabel.innerHTML = "";
    playerScoreDiv.innerHTML = "0";
    botScoreDiv.innerHTML = "0";
    playerImg.src = "img/Rock.png";
    botImg.src = "img/Rock.png";

    playerScore = 0;
    botScore = 0;
}

function playGame() {
    const randomObject = Math.floor(Math.random() * rockPaperScissor.length);
    const botObject = rockPaperScissor[randomObject];
    botResultLabel.innerHTML = botObject;

    const playerObject = playerResultLabel.innerHTML;

    let result;

    if (playerObject == "Rock" && botObject == "Scissor") {
        result = "Player wins!";
        playerScore += 1;
    } else if (playerObject == "Paper" && botObject == "Rock") {
        result = "Player wins!";
        playerScore += 1;
    } else if (playerObject == "Scissor" && botObject == "Paper") {
        result = "Player wins!";
        playerScore += 1;
    } 
    
    else if (playerObject == "Rock" && botObject == "Paper") {
        result = "Bot wins!";
        botScore += 1;
    } else if (playerObject == "Paper" && botObject == "Scissor") {
        result = "Bot wins!";
        botScore += 1;
    } else if (playerObject == "Scissor" && botObject == "Rock") {
        result = "Bot wins!";
        botScore += 1;
    }

    else {
        result = "Draw!";
    }

    finalResultLabel.innerHTML = result;
}



