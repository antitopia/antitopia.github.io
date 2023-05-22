let div_number = document.getElementById("guess_number");
let div_clicker = document.getElementById("game_clicker");
let div_dinosaur = document.getElementById("guess_dinosaur");
let div_button = document.getElementById("button_off");
let div_rules_guess_number = document.getElementById("rules_guess_number");
let div_field_guess_number = document.getElementById("field_guess_number");
let random_number;
let text_count_money = document.getElementById("count_money");
let count_money_user = 0;
let count_click = 1;
let picture_left = ['picture/grass.jpg','picture/ground.jpg','picture/parnik.jpg'];
let picture_right = ['picture/potato.jpg','picture/potato2.jpg', 'picture/potato3.jpg'];
let shop_left = document.getElementsByClassName("left")

for(let i=0; i<shop_left.length;i++){
    shop_left[i].style.backgroundImage = "url("+picture_left[i]+")";
}
let shop_right = document.getElementsByClassName("right")
for(let i=0; i<shop_right.length;i++){
    shop_right[i].style.backgroundImage = "url("+picture_right[i]+")";
}


function guess_number(){
    div_number.style.display = "block";
    div_clicker.style.display = "none";
    div_dinosaur.style.display = "none";

}

 div_clicker = document.getElementById("game_clicker");

function game_clicker(){
    div_clicker.style.display = "block";
    div_number.style.display = "none";
    div_dinosaur.style.display = "none";
}

 div_dinosaur = document.getElementById("game_dinosaur");

function game_dinosaur(){
    div_dinosaur.style.display = "block";
    div_clicker.style.display = "none";
    div_number.style.display = "none";
}
function button_off(){ 
    div_dinosaur.style.display = "none";
    div_clicker.style.display = "none";
    div_number.style.display = "none";
}




function start_game_number(){
    div_rules_guess_number.style.display = "none";
    div_field_guess_number.style.display = "block";
    random_number = Math.floor(Math.random()*99+1); /*случайное число(его генерация)*/
    console.log(random_number); /*убрать после теста*/
}
count_prompt = 0
prompt_for_user = document.getElementById("prompt");
function accept_answer(){
    count_prompt++;
    answer_user = document.getElementById("answer_user").value;
    if (Number(answer_user) > random_number){
        prompt_for_user.innerText = "Введи число поменьше";
    }
    else if (Number(answer_user) < random_number){
        prompt_for_user.innerText = "Введи число побольше";
    }
    else if (Number(answer_user) == random_number){
        prompt_for_user.innerText = "Ты угадал! Потратил  "+count_prompt+"  попыток";
    }
        }


function filter_button(){
    if (count_money_user>=Number(document.getElementsByClassName("cost_element")[0].innerText)){
        document.getElementsByClassName("left")[0].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("left")[0].style.filter = "grayscale(100%)";
    }
    if (count_money_user>=Number(document.getElementsByClassName("cost_element")[1].innerText)){
        document.getElementsByClassName("left")[1].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("left")[1].style.filter = "grayscale(100%)";
    }
    if (count_money_user>=Number(document.getElementsByClassName("cost_element")[2].innerText)){
        document.getElementsByClassName("left")[2].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("left")[2].style.filter = "grayscale(100%)";
    }
       if (count_money_user>=Number(document.getElementsByClassName("cost_element")[3].innerText)){
        document.getElementsByClassName("right")[0].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("right")[0].style.filter = "grayscale(100%)";
    }
    if (count_money_user>=Number(document.getElementsByClassName("cost_element")[4].innerText)){
        document.getElementsByClassName("right")[1].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("right")[1].style.filter = "grayscale(100%)";
    }
    if (count_money_user>=Number(document.getElementsByClassName("cost_element")[5].innerText)){
        document.getElementsByClassName("right")[2].style.filter = "grayscale(0%)";
    }
    else{
        document.getElementsByClassName("right")[2].style.filter = "grayscale(100%)";
    }
}
filter_button()

 function candyclicker(){
    count_money_user = count_money_user + count_click;
    text_count_money.innerText = count_money_user + " 🥔";
    if (count_money_user>=cost_fabric.innerText){
        fabric.style.backgroundColor="orange";
    }
   filter_button()
 }


 function buy_fabric(){
    if(count_money_user>=cost_fabric.innerText){
        count_money_user = count_money_user - Number(cost_fabric.innerText);
        cost_fabric.innerText = Number(cost_fabric.innerText)*2.5;
        count_click++;
        count_fabric.innerText = count_click+1;
        text_count_money.innerText = count_money_user + " 🥔"
        if(count_money_user<cost_fabric.innerText){
        fabric.style.backgroundColor="rgb(235, 20, 13)"
        fabric.style.filter="grayscale(0%)"}
    }
 }
 function buy(x){
    if (x==1 && count_money_user>=document.getElementsByClassName("cost_element")[0].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[0].innerText);
        div_clicker.style.backgroundImage = "url(picture/grass.jpg)";
        
        document.getElementsByClassName("cost_element")[0].innerText = "";
        text_count_money.innerText = count_money_user + " 🥔"
    }
    if (x==3 && count_money_user>=document.getElementsByClassName("cost_element")[2].innerText){


    count_money_user -= Number(document.getElementsByClassName("cost_element")[2].innerText);
    div_clicker.style.backgroundImage = "url(picture/parnik.jpg)";
   
    document.getElementsByClassName("cost_element")[2].innerText = "";
    text_count_money.innerText = count_money_user + " 🥔"
    }

    if (x==2 && count_money_user>=document.getElementsByClassName("cost_element")[1].innerText){


        count_money_user -= Number(document.getElementsByClassName("cost_element")[1].innerText);
        div_clicker.style.backgroundImage = "url(picture/ground.jpg)";
        document.getElementsByClassName("cost_element")[1].innerText = "";
        text_count_money.innerText = count_money_user + " 🥔"
    }
    if(x==4 && count_money_user>=document.getElementsByClassName("cost_element")[3].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[3].innerText)
        text_count_money.innerText = count_money_user + " 🥔"
        document.getElementsByClassName("cost_element")[3].innerText = "";
        potato.src="picture/potato.jpg"
    }
    if(x==5 && count_money_user>=document.getElementsByClassName("cost_element")[4].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[4].innerText)
        text_count_money.innerText = count_money_user + " 🥔"
        document.getElementsByClassName("cost_element")[4].innerText = "";
        potato.src="picture/potato2.jpg"
    }
    if(x==6 && count_money_user>=document.getElementsByClassName("cost_element")[5].innerText){
        count_money_user -= Number(document.getElementsByClassName("cost_element")[5].innerText)
        text_count_money.innerText = count_money_user + " 🥔"
        document.getElementsByClassName("cost_element")[5].innerText = "";
        potato.src="picture/potato3.jpg"

    }
    
    filter_button()
    


 }  