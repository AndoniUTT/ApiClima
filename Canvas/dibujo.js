const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 75, 0, 0, Math.PI * 2);        
ctx.fill();
ctx.stroke();
                                                          //cuerpo
ctx.beginPath();
ctx.ellipse(200, 150, 60,50, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.fillRect(150, 100, 100, 20);
ctx.beginPath();                        //sombrero
ctx.fillRect(165, 60, 70, 40);

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(220, 130, 5, 0, Math.PI * 2);
ctx.fill();                                     //ojos
ctx.beginPath();
ctx.arc(180, 130, 5, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(175, 120);
ctx.lineTo(190, 130);
ctx.stroke();               //cejas 
ctx.beginPath();
ctx.moveTo(210, 130);
ctx.lineTo(225, 120);
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(190, 150);
ctx.lineTo(200, 165);    //pico
ctx.lineTo(210, 150);
ctx.fill();

ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(180, 272);    //patas
ctx.lineTo(180, 290);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(220, 272);
ctx.lineTo(220, 290);
ctx.stroke();

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.moveTo(310, 185);
ctx.lineTo(340, 185);
ctx.lineTo(350, 190);
ctx.lineTo(340, 190);
ctx.lineTo(340, 220);
ctx.lineTo(310, 200);
ctx.lineTo(310, 180);
ctx.fill();

ctx.fillStyle = 'brown';
ctx.fillRect(280, 185, 30, 10);



