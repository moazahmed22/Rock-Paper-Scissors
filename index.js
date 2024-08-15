let arrOfChoice = ['rock', 'paper', 'scissors'];

const player1Choice = document.getElementById("player1Choice");
const player2Choice = document.getElementById("player2Choice");
const score = document.getElementById("score");
const flag = document.getElementById("flag");
const result = document.getElementById("result");
const playAgain = document.getElementById("again");

let p2choice;
let gameRunning = true;
let player1Score = 0, player2Score = 0;
//some Audio
let music = new Audio("./music/chika dance.mp3");
music.loop = "true";
music.volume = 0.5;
audioPlaying = false;
const playAudio = () => {
    audioPlaying = audioPlaying ? false : true;
    audioPlaying ? music.play() : music.pause();
}
//functions
//random choice for bot
const botChoice = () => {
    return arrOfChoice[Math.floor(Math.random() * 100) % 3];
}

//reveal p1 Shape
const viewIcon = object => {
    player1Choice.setAttribute("src", `./pics/${object}1.svg`);
}

//actual game
const game = p1Choice => {
    //is the game still running ??
    if (gameRunning) {
        //bot choice
        botChoice();
        p2choice = botChoice();
        player2Choice.setAttribute("src", `./pics/${p2choice}2.svg`);

        //choice Comparison
        if (p1Choice == "rock") {
            viewIcon(p1Choice);
            if (p2choice == "rock") {
                flag.style.color = `white`;
                flag.textContent = `It is a tie`;
            }
            else if (p2choice == "paper") {
                player2Score++;
                console.log(`player2Score = ${player2Score}`);
                flag.style.color = `Red`;
                flag.textContent = `paper beats rock`;
            }
            else {
                player1Score++;
                console.log(`player1Score = ${player1Score}`);
                flag.style.color = `hsl(160, 55%, 55%)`;
                flag.textContent = `rock beats scissors`;
            }
            score.textContent = `${player1Score}:${player2Score}`
        }

        else if (p1Choice == "paper") {
            viewIcon(p1Choice);
            if (p2choice == "paper") {
                flag.style.color = `white`;
                flag.textContent = `It is a tie`;
            }
            else if (p2choice == "scissors") {
                player2Score++;
                console.log(`player2Score = ${player2Score}`);
                flag.style.color = `Red`;
                flag.textContent = `scissors beat paper`;
            }
            else {
                player1Score++;
                console.log(`player1Score = ${player1Score}`);
                flag.style.color = `hsl(160, 55%, 55%)`;
                flag.textContent = `paper beats rocks`;
            }
            score.textContent = `${player1Score}:${player2Score}`
        }

        else {
            viewIcon(p1Choice);
            if (p2choice == "scissors") {
                flag.style.color = `white`;
                flag.textContent = `It is a tie`;
            }
            else if (p2choice == "rock") {
                player2Score++;
                console.log(`player2Score = ${player2Score}`);
                flag.style.color = `Red`;
                flag.textContent = `rock beat scissors`;
            }
            else {
                player1Score++;
                console.log(`player1Score = ${player1Score}`);
                flag.style.color = `hsl(160, 55%, 55%)`;
                flag.textContent = `scissors beat paper`;
            }
            score.textContent = `${player1Score}:${player2Score}`
        }
        //validation to stop the game when each of the players reaches a score of 3
        if (player1Score > 2 || player2Score > 2) {
            gameRunning = false;
            if (player1Score > player2Score) {
                result.style.color = `hsl(160, 55%, 55%)`;
                result.innerHTML = `Human Wins 🎉🎉✨🎊<img src="./pics/chikaDance.gif">`;
            }
            else {
                result.style.color = `Red`;
                result.textContent = `A bot just beat you 🗿`;
            }
            playAgain.style.visibility = "visible";
        }
    }

}
const newGame = () => {
    player1Choice.removeAttribute("src");
    player2Choice.removeAttribute("src");
    player1Score = 0;
    player2Score = 0;
    gameRunning = true;
    playAgain.style.visibility = "hidden";
    result.innerHTML = ``;
    score.textContent = `0:0`
}