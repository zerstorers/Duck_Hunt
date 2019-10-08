// Zone de jeux
var play_area = document.createElement("div");
document.body.appendChild(play_area);
play_area.id = "play_area";
//Fin zone de jeux
//


for (let i = 0; i < 10; i++) {
    pos_x = Math.random() * 450;
    pos_y = Math.random() * 200;
    var duck = document.createElement("div");
    play_area.appendChild(duck);
    duck.style.left = pos_x + "px";
    duck.style.top = pos_y + "px";
    duck.id = "duck";

}

function killduck(event) {
    console.log(event)
    duck.remove();


    duck = document.createElement("div");
    duck.id = "duck";
    ppos_x = Math.random() * 450;
    pos_y = Math.random() * 200;
    duck.style.left = pos_x + "px";
    duck.style.top = pos_y + "px";
    play_area.appendChild(duck);
    duck.addEventListener("click", killduck);
}

duck.addEventListener("click", killduck);


setInterval(function () {
    pos_x = Math.random() * 450;
    pos_y = Math.random() * 200;
    duck.style.left = pos_x + "px";
    duck.style.top = pos_y + "px";
    duck.style.transitionDuration = "5s"
}, 1000);
