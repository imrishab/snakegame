const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX=5, snakeY=10;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
changeFoodPosition();
const initGame = () => {
    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;
    html += `<div class="snake" style="grid-area:${snakeY}/${snakeX} "></div>`;
    playBoard.innerHTML = html;
}
initGame(); 