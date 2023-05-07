const playBoard = document.querySelector(".play-board");

const playAgainButton = document.querySelector(".playagainbutton");

const gameOverBox = document.querySelector(".gameoverbox");

let gameOver = false;

var score1 = document.querySelector(".score1");

var score2 = document.querySelector(".score2");

var max = 0;

var highScore = document.querySelector(".high-score");

const up = document.querySelector(".up");

const down = document.querySelector(".down");

const right = document.querySelector(".right");

const left = document.querySelector(".left");



let foodX, foodY;

let snakeBody = [];

let velocityX = 0, velocityY = 0;

let snakeX = 6, snakeY = 10;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}




const changeDirection = (e) => {
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (gameOver) {
        return;
    }

    initGame()

}

const initGame = () => {

    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;



    snakeX += velocityX;
    snakeY += velocityY;



    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }


    snakeBody[0] = [snakeX, snakeY];


    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="snake-head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]} "></div>`;

    }



    playBoard.innerHTML = html;
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
    }


    if (snakeX === 31 || snakeY === 31 || snakeX === 0 || snakeY === 0) {
        gameOverBox.style.display = "flex";
        document.removeEventListener("keydown", changeDirection);
        gameover()

    }


    score1.innerHTML = `Score : ${snakeBody.length - 1}`;


    score2.innerHTML = `Your score is : ${snakeBody.length - 1}`;


    if (snakeBody.length - 1 > max) {
        highScore.innerHTML = `High Score : ${(snakeBody.length - 1)}`
        max = snakeBody.length - 1
    }


}
const gameover = () => {
    snakeX = 6;

    snakeY = 10;

    velocityX = 0;
    
    velocityY = 0;
}

changeFoodPosition();

setInterval(initGame, 125);

function endGame() {
    gameOver = true;

    document.removeEventListener("keydown", changeDirection);
}

function playagain() {
    gameOverBox.style.display = "none";
    document.addEventListener("keydown", changeDirection);
    snakeBody = [];
}

function goup() {
    velocityX = 0;
    velocityY = -1;
}

function godown() {
    velocityX = 0;
    velocityY = 1;
}

function goright() {
    velocityX = 1;
    velocityY = 0;
}

function goleft() {
    velocityX = -1;
    velocityY = 0;
}

document.addEventListener("keydown", changeDirection);

playAgainButton.addEventListener("click", playagain);

up.addEventListener("click", goup)

down.addEventListener("click", godown)

right.addEventListener("click", goright)

left.addEventListener("click", goleft)
