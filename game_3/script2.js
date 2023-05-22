let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let field_game = document.getElementsByClassName("field_game");
canvas.width= document.documentElement.clientWidth*0.49;
canvas.height = document.documentElement.clientHeight*0.72;
let height_canvas= canvas.height;
let width_canvas= canvas.width;

let ground = new Image();
ground.src = "game_3/bg_image.jpg";
let person = new Image();
person.src = "game_3/persona1.png";
let block = new Image();
block.src = 'game_3/block.png';

personStart = false;
groundX=0;
personY=height_canvas*0.5;
time=0;
blockX=width_canvas;
move="none";

window.onload = function () {
    context.drawImage(ground,0,0)
    context.drawImage(person,width_canvas/9,height_canvas*0.5)
    context.font = "20px Arial";
    context.fill = "red"
    context.fillText("Нажмите Enter для старта",width_canvas/3, height_canvas*2);
    




}
document.addEventListener("keydown", moveUp);

function moveUp(event) {
    if (event.key=="Enter" && personStart == false) {
        personStart = true;
        requestAnimationFrame(draw);
        
    }
    if (event.key=="w" && move=="none"){
        move="up";
    }
}

function draw(){
    if (personStart==true)  requestAnimationFrame(draw); 
    time++;
    
    // Анимация фона
    groundX-=2;
    if(groundX<=-width_canvas+300){groundX=0;}
    

    // Отрисовка 
    context.clearRect(0,0,width_canvas, height_canvas);
    context.drawImage(ground,groundX,0);
    context.drawImage(person,width_canvas/9,personY);
    context.drawImage(block,blockX,height_canvas*0.56);
    context.fillText('Ваш счёт ' + time, 450, 60);
    

    // Анимация персонажа
    if (time % 64 == 0 && move=="none") {
        person.src = 'game_3/persona2.png';
    } 
    else if (time % 32 == 0 && move=="none") {
        person.src = 'game_3/persona1.png';
    }
    
    // Появление препятствия
    blockX-=2;
    if(blockX<=-100){
        blockX=width_canvas;
    }
    

    // Прыжки
    if (move == 'up') {
        person.src = 'game_3/persona3.png';
        personY -=4;
        if (personY <= height_canvas*0.19) {
            move = 'down';
             personY = height_canvas*0.19;
        }
    } 
    else if (move == 'down') {
        personY +=4;
        if (personY >= height_canvas*0.5) {
        person.src = 'game_3/persona1.png';
         move = 'none';
          personY = height_canvas*0.5;
        }
    }

    // Столкновение с препятствием
    if (blockX > width_canvas/9-60 && blockX < width_canvas/9+70 && personY+80>height_canvas*0.56) {
        personStart=false
    }

    // Вывод итогов
    if (personStart == false) {context.fillText('Ваш счёт ' + time, 450, 160);}
}
