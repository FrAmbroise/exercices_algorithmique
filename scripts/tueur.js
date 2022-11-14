class Character{
    constructor(name, caracteristic, death, damage){
        this.name = name;
        this.caracteristic = caracteristic;
        this.death = death;
        this.damage = damage;
    }
}


let names = ["Mardoché", "Aliocha", "Yukino", "Aygulf", "Léonide du Val d'Ambert III"];

let caracteristics = ["dresseur de méduses d'aquarium", "testeur matelat chez But", "amateur de racines de pissenlits péruviens", "auteur de livres sur l'utilisation optimale des petites cuillères en porcelaine", "médaille d'argent en nage synchronisée solo"];

let survivors = [];

function getRndInRange(min, max) {
    return Math.random() * (max - min)  + min;
}


while(names.length > 4){
    randomname = Math.floor(Math.random()*(names.length));
    randomcarac = Math.floor(Math.random()*(names.length));
    randomdeath = getRndInRange(0.00, 0.0);
    randomattack = getRndInRange(0.0, 0.0);
    survivors.push(new Character(names[randomname], caracteristics[randomcarac], randomdeath, randomattack));
    names.splice(randomname, 1);
    caracteristics.splice(randomcarac,1);
}

let Killerhp = 10;
let dead = "";

while(survivors.length > 0){
    if(Killerhp <= 0){
        break;
    }
    console.log("Il reste au tueur "+Killerhp+ " points de vie.");
    console.log("Le tueur attaque.");
    randomcharacter = Math.floor(Math.random()*(survivors.length));
    randomaction = Math.random();

    if(randomaction <= survivors[randomcharacter].death){
        console.log("Le survivant " + survivors[randomcharacter].name + " meurt.");
        if(dead != "")
            dead += ", ";
        dead += survivors[randomcharacter].name + " " + survivors[randomcharacter].caracteristic +" ";
        survivors.splice(randomcharacter,1);
    }else if (randomaction <= survivors[randomcharacter].death + survivors[randomcharacter].damage){
        console.log("Le survivant " + survivors[randomcharacter].name + " esquive et attaque.");
        Killerhp -=10;
        console.log("Le tueur perd 10 points de vie");
    }else{
        console.log("Le survivant " + survivors[randomcharacter].name + " se sacrifie pour attaquer.");
        Killerhp -= 15;
        console.log("Le tueur perd 15 points de vie");
        if(dead != "")
            dead += ", ";
        dead += survivors[randomcharacter].name + " " + survivors[randomcharacter].caracteristic +" ";
        survivors.splice(randomcharacter,1);
        
    }
    
}

if(Killerhp <= 0 && survivors.length == 0){
    console.log("Avec leurs nobles sacrifices, les survivants ont mis le tueur hors d'etat de nuire. Tout le monde est mort.");
}
else if(Killerhp <= 0){
    console.log("Les survivants ont gagnés mais R.I.P à " + dead+".");
}else{
    console.log("Le tueur a exterminé les survivants, reposez en paix "+ dead +".");
}