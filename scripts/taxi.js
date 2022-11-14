class Perso{
    constructor(name, hp){
        this.name = name;
        this.hp = hp;
    }
}


let music = ["Annissa - Wejdene","Arabian danse - Tchaikovsky","Le gambadou - Patrick Sébastien", "Beat of the rising Sun - Dave Rodgers", "All  want for Christmas is you - Mariah Carrey"];
let feux = 25;
let feux_restants = feux;
let personnage = new Perso("Idriss", 8);
let changement = 0;

for(i = 0; i < feux; i++){
    feux_restants --;
    var randommusic = Math.floor(Math.random() * 4 );
    if(music[randommusic] == "Annissa - Wejdene"){
        personnage.hp --;
        changement ++;
        console.log(""+personnage.name+" entend Anissa de Wejdene et perd de la santé mentale.");
        if(personnage.hp === 0){
            break;
        }else {
            console.log(""+personnage.name+" change de taxi.");
        }
    }else{
        console.log(""+personnage.name+" entend "+music[randommusic]+".");
    }
    if(feux_restants > 1){
        console.log("Il reste " + feux_restants + " feux.");
    }else if (feux_restants === 1){
        console.log("Il reste 1 feu.");
    }else{
        console.log("Il n'y a plus de feu !")
    }
}

if(personnage.hp === 0){
    console.log(""+personnage.name+" explose.")
}else if(changement > 1){
    console.log(""+personnage.name+" est rentré chez lui avec "+changement+" changements de taxi. ")
}else{
    console.log(""+personnage.name+" est rentré chez lui avec "+changement+" changement de taxi. ")
}