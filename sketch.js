var oceano, imageOceano;
var Pc, imagePc;





function preload(){
    imageOceano.loadImage("oceano.png");
    imagePc.loadImage("barco.png");
    
}
function setup(){
    createCanvas(400,400);
    oceano = createSprite(200,200,400,400);
    Pc = createSprite(200,200,30,30);
    
    oceano.addImage(imageOceano);
    Pc.addImage(imagePc);

}





function draw() {
  background("blue");
  ondas();
  drawSprites();
  
}
function ondas(){
  var onda = createSprite(40,40);
  onda.velocityY = 1;
  onda.loadImage("onda.png");
} 
























