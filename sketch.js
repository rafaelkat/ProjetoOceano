var PLAY = 1;
var END = 0;
var gameState = END;


var oceano, imageOceano;
var Pc, imagePc, PcQuebrado;
var onda, imageOnda;
var rocha, imageRocha;
var grupoRochas;

var score;

function preload(){

  imageOceano = loadImage("oceano.png");
  imagePc = loadImage("pirata.png");
  imageOnda = loadImage("onda.png");
  imageRocha = loadImage("pedras.png");
  PcQuebrado = loadImage("barco_quebrado.png")
  
}

function setup() {
  createCanvas(600, 600);
  oceano = createSprite(200,200);
  Pc = createSprite(300,500,30,30);
  
  oceano.addImage(imageOceano);
  oceano.scale= 2;

  Pc.addImage(imagePc);
  
  Pc.scale = 1;

  grupoRochas = new Group();

  
  score = 0;
}

function draw() {
  background(180);
  

  if(keyDown(UP_ARROW)){
    Pc.y = Pc.y -5;
  }
  if(keyDown(DOWN_ARROW)){
    Pc.y = Pc.y +5;
  }
  if(keyDown(LEFT_ARROW)){
    Pc.x = Pc.x -5;
  }
  if(keyDown(RIGHT_ARROW)){
    Pc.x = Pc.x +5;
  }
  
  if(gameState === PLAY){
    score = score + Math.round(frameCount/60);
    
    



  }




  if(grupoRochas.isTouching(Pc)){
    gameState = END;
    console.log("play");
    
  }
  if (gameState === END) {
    Pc.addImage("quebrando", PcQuebrado);

  }
   

  

  
  
  ondas();
  Rochas();

  drawSprites();
  
}


function  ondas() {
//   para qeu não gere um rastro, apesar de ja ter um background. 
//  pus o fframeCount abaixo. que é o contador de frames.
// a cada 60 frames ele solta uma sprite.

   if (frameCount % 5 === 0) {
    onda = createSprite(40,40);

//  abaixo tem o posição aleatoria   
// esquerda para direita
    onda.x = Math.round(random(10,580));
// cima para baixo
    //onda.y = Math.round(random(600,10));

    onda.addImage(imageOnda);
    onda.scale = 2

    onda.velocityY = +4;
    //onda.velocityX = 0.5;

//      //atribua tempo de vida à variável
   onda.lifetime = 590;
     //ajustar a profundidade do barco para cima das ondas
    Pc.depth = onda.depth;

    Pc.depth = Pc.depth + 1;

    

    }
}

function Rochas(){
  if(frameCount % 60 === 0) {
    rocha = createSprite(50,70);
    rocha.x = Math.round(random(0,590));
    rocha.velocityY = +4;

    rocha.addImage(imageRocha);
    rocha.scale = 0.3
    rocha.lifetime = 590;

    rocha.deapth = onda.depth;

    rocha.depth = rocha.depth +1;

    grupoRochas.add(rocha);


  }       
  


}