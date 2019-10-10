var play_area = document.createElement("div");
document.body.appendChild(play_area);
play_area.id = "play_area";

function kill_ducks() {
    this.remove()
    var duck = document.createElement("div");
    play_area.appendChild(duck);
    pos_x = Math.random() * 450;
    pos_y = Math.random() * 450;
    duck.style.marginTop = pos_x + "px";
    duck.style.marginLeft = pos_y + "px";
    duck.className = "ducks";
    duck.addEventListener("click", kill_ducks)
}


for (let i = 0; i < 15; i++) {
    pos_x = Math.random() * 450;
    pos_y = Math.random() * 450;
    var duck = document.createElement("div");
    play_area.appendChild(duck);
    duck.style.marginTop = pos_x + "px";
    duck.style.marginLeft = pos_y + "px";
    duck.className = "ducks";
    duck.addEventListener("click", kill_ducks);
    
}

setInterval(function () {
    var all_ducks = document.getElementsByClassName("ducks")
    for (let j = 0; j < all_ducks.length; j++) {
        pos_x = Math.random() * 450;
        pos_y = Math.random() * 450;
        all_ducks[j].style.marginTop = pos_x + "px";
        all_ducks[j].style.marginLeft = pos_y + "px";
        all_ducks[j].style.transitionDuration = "3s";
    }
}, 5000);
