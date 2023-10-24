const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const body = document.querySelector('body');

let direction = 1;

const vampire = {
    x: 0,
    y: 0,
    pinta: function () {
        ctx.font = '30px Serif';
        ctx.fillText('🥰', this.x  * 20, this.y * 20);
    }
}

const comida =[];
for (let i=0; i<10;i++){
    comida.push({
        x: Math.floor(Math.random() * 30),
        y: Math.floor(Math.random() * 20) + 1,
        pinta: function(){
            ctx.fillText('💙',this.x * 20, this.y * 20);
        },
        live: true
    });
}

let posx=0;
let posy=1;

setInterval(()=>{
    ctx.clearRect(0,0,640,400);
    vampire.x = posx;
    vampire.y = posy;
    vampire.pinta();
    comida.forEach(love => {
        if (posx === love.x && posy === love.y){
            love.live = false;
        }
        if(love.live)
        love.pinta()
    });
    switch(direction){
        case 1:
            posx++;
            break;
        case 2:
            posy++;
            break;
        case 3:
            posx--;
            break;
        case 4:
            posy--;
            break;
    }
    if(posx >32) posx=0;
    if(posx <0) posx=32;
    if(posx >20) posx=0;
    if(posx <0) posx=20;
}, 500);

body.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break;
        case 'ArrowLeft':
            direction = 3;
            break;
        case 'ArrowUp':
            direction = 4;
            break;
    }
})