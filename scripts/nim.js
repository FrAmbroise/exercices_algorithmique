let batons = document.getElementsByClassName("baton");
let buttons = document.getElementsByClassName("valid-button");
let activeBatons = document.getElementsByClassName("active");

function getRndInRange(min, max) {
    return Math.floor(Math.random() * (max - min)  + min);
}

let numberOfBaton = getRndInRange(10, 17);

for(i = 0; i < numberOfBaton; i++){
    let div = document.createElement('div') ;
    div.setAttribute('Class', 'baton');
    document.getElementById('contain').appendChild(div);
}



let arrayBaton = Array.from(batons);

let arrayActiveBaton = Array.from(activeBatons);
let arrayButton = Array.from(buttons);
let playing = true;
let player1turn = true;

let active = 0;
let used = 0;
let numberBaton = 8;
if(arrayActiveBaton.length < 3 && playing){
    arrayBaton.forEach(baton => {
        baton.addEventListener('click', function(){
            if((!this.classList.contains('active') &&(!this.classList.contains('used')) && active < 3)){
                this.classList.add('active');
                active +=1;
            }else if(this.classList.contains('active') &&(!this.classList.contains('used'))){
                this.classList.remove('active');
                active -=1;
            }
            if(active > 0){
                arrayButton.forEach(button =>{
                    button.classList.add('validate');
                });
            }else{
                arrayButton.forEach(button =>{
                    button.classList.remove('validate');
                });
            }
            console.log(active);
        });
    })
    
}


arrayButton.forEach(button =>{
    button.addEventListener('click', function(){
    if(button.classList.contains('validate')){
        player1turn = !player1turn;
        if(document.getElementById('turn1').classList.contains('hidden')){
            document.getElementById('turn1').classList.remove('hidden');
            document.getElementById('turn2').classList.add('hidden');
        }else{
            document.getElementById('turn2').classList.remove('hidden');
            document.getElementById('turn1').classList.add('hidden');
        }
        console.log(player1turn);
        arrayBaton.forEach(baton =>{
                if(baton.classList.contains('active')){
                    baton.classList.remove('active');
                    active -=1;
                    used +=1;
                    console.log(used);
                    baton.classList.add('used');
                }
            })
            if(used == numberOfBaton-1){
                playing = false;
                if(player1turn){
                    document.getElementById('win2').classList.remove('hidden');
                }else{
                    document.getElementById('win1').classList.remove('hidden');
                }
                button.classList.add('hidden');
                arrayBaton.forEach(baton =>{
                    baton.classList.add('hidden');
                });
            }else if(used == numberOfBaton){
                playing = false;
                if(player1turn){
                    document.getElementById('win1').classList.remove('hidden');
                }else{
                    document.getElementById('win2').classList.remove('hidden');
                }
                button.classList.add('hidden');
                arrayBaton.forEach(baton =>{
                    baton.classList.add('hidden');
                });
            }
        }
    })
})












