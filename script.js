const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeBody=[];
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



}

const initGame = () => {

    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;

    snakeBody[0]=[snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;
    

for (let i = snakeBody.length-1; i >0; i--) {
    snakeBody[i]=snakeBody[i-1];
    
}

    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="snake-head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]} "></div>`;
        
    }


    
    playBoard.innerHTML = html;
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
    }
}

changeFoodPosition();

setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);
