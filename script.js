// Zone de jeux
var play_area = document.createElement("div");
document.body.appendChild(play_area);
play_area.id = "play_area";
//Fin zone de jeux
//
pos_x = (Math.random() * 500);
pos_y = (Math.random() * 500);
var duck = document.createElement("div");
play_area.appendChild(duck);
duck.style.left = pos_x + "px";
duck.style.top = pos_y + "px";
duck.id = "duck";


setInterval(function () {
    pos_x = (Math.random() * 475);
    pos_y = (Math.random() * 475);
    duck.style.left = pos_x + "px";
    duck.style.top = pos_y + "px";
    duck.style.transitionDuration = "2s"
}, 1000);

duck.addEventListener("click", function(event){
    console.log(event)
})

