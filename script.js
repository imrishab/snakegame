const playBoard = document.querySelector(".play-board");

let foodX, foodY;
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
    }

    initGame();

}

const initGame = () => {

    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;

    snakeX+=velocityX;
    snakeY+=velocityY;

    html += `<div class="snake-head" style="grid-area:${snakeY}/${snakeX} "></div>`;
    playBoard.innerHTML = html;
}

changeFoodPosition();
initGame();

document.addEventListener("keydown", changeDirection);
