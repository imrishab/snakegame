const playBoard = document.querySelector(".play-board");

let foodX, foodY;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
changeFoodPosition();
const initGame = () => {
    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;
    playBoard.innerHTML = html;
}
initGame(); 

console.log(`math.random = ${math.random}`);