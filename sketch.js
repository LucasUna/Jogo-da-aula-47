var gameState = 0
var player
var bordas
var botao1, botao2
var background0_img
var inimigos
var labirinto1, labirinto2

function setup(){
  createCanvas(700,600)
  bordas = createEdgeSprites()
  player = createSprite(30,30,20,20)
  player.shapeColor = "red"
  botao1 = createSprite(500,300,150,120)
  botao2 = createSprite(500,500,150,120)

  inimigos = new Group()

  labirinto1 = new Group()

  criarLabirinto1()
}

function draw(){
  background(0)
  

  
  player.collide(bordas)

  if (keyDown(RIGHT_ARROW)){
    player.velocityX = 10
  }
  if (keyDown(LEFT_ARROW)){
    player.velocityX = -10
  }
  if (keyDown(UP_ARROW)){
    player.velocityY = -10
  }
  if (keyDown(DOWN_ARROW)){
    player.velocityY = 10
  }

  if(gameState === 0){
    background("yellow")
    if(mousePressedOver(botao1)){
      gameState = 1
    }
    if(mousePressedOver(botao2)){
      gameState = 2
    }
  }
  if(gameState ===1){
    jogo1()
  }
  if(gameState === 2){
    //labirinto2.desenhar()
    botao1.visible = false
    botao2.visible = false

  }

  drawSprites()
}

function criarInimigos(num){
  for(var i = 0; i<num; i++){
    var x = random(50,650)
    var y = random(50,650)
    var sprite = createSprite(x,y,20,20)
    sprite.shapeColor = "blue"
    inimigos.add(sprite)
    
  }
}

function jogo1(){
  background("green")
  botao1.visible = false
  botao2.visible = false
  //criarInimigos(3)
  player.collide(labirinto1)
  inimigos.collide(labirinto1)
}

function criarLabirinto1(){
  wall1 = createSprite(20,70,200,20);
  wall2 = createSprite(160,50,20,100);
  wall3 = createSprite(80,130,100,20);
  wall4 = createSprite(50,240,20,150); 
  wall5 = createSprite(160,210,150,20);
  wall6 = createSprite(10,250,200,20);
  wall7 = createSprite(160,180,20,100);
  wall8 = createSprite(530,30,300,20);
  wall9 = createSprite(210,130,20,200);
  wall10 = createSprite(350,150,200,20);
  wall11 = createSprite(315,50,130,20);
  wall12 = createSprite(500,300,20,450);
  wall13 = createSprite(220,440,20,250);
  wall14 = createSprite(330,210,270,20);
  wall15 = createSprite(100,430,20,300);
  wall16 = createSprite(180,310,100,20);
  wall17 = createSprite(30,352,20,100);
  wall18 = createSprite(175,352,20,100);
  wall19 = createSprite(280,290,20,100);
  wall20 = createSprite(350,270,120,20);
  wall21 = createSprite(250,390,100,20);
  wall22 = createSprite(330,370,20,100);

  wall15.shapeColor = "yellow"

        labirinto1.add(wall1)
        labirinto1.add(wall2)
        labirinto1.add(wall3)
        labirinto1.add(wall4)
        labirinto1.add(wall5)
        labirinto1.add(wall6)
        labirinto1.add(wall7)
        labirinto1.add(wall8)
        labirinto1.add(wall9)
        labirinto1.add(wall10)
        labirinto1.add(wall11)
        labirinto1.add(wall12)
        labirinto1.add(wall13)
        labirinto1.add(wall14)
        labirinto1.add(wall15)
        labirinto1.add(wall16)
        labirinto1.add(wall17)
        labirinto1.add(wall18)
        labirinto1.add(wall19)
        labirinto1.add(wall20)
        labirinto1.add(wall21)
        labirinto1.add(wall22)
}