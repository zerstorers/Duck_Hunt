var play_area = document.createElement("div");
document.body.appendChild(play_area);
play_area.id = "play_area";
// var cpt = 0

function create_duck () {
    var duck = document.createElement("div");
    play_area.appendChild(duck);
    duck.className = "ducks";

    return duck
}

function position_duck(duck) {
    pos_x = Math.random() * 450;
    pos_y = Math.random() * 450;
    duck.style.marginTop = pos_x + "px";
    duck.style.marginLeft = pos_y + "px";
}

function kill_ducks() {
    this.remove()
    // cpt = cpt+1;
    var duck = create_duck();
    position_duck(duck);
    duck.addEventListener("click", kill_ducks)
}


for (let i = 0; i < 15; i++) {
    var duck = create_duck();
    position_duck(duck);
    duck.addEventListener("click", kill_ducks); 
}

setInterval(function () {
    var all_ducks = document.getElementsByClassName("ducks")
    for (let j = 0; j < all_ducks.length; j++) {
        position_duck(all_ducks[j]);
        all_ducks[j].style.transitionDuration = "5s";
    }
}, 3000);

// var compteur = document.createElement("div");
// document.body.appendChild(compteur);
// compteur.className = "cpt";