var gameState = 0
var player
var bordas
var botao1
var background0_img
var inimigos
var labirinto1
var imgInimigo
var recompensas

function preload(){
  imgInimigo = loadImage("aliens2.png")
}

function setup(){
  createCanvas(700,600)
  bordas = createEdgeSprites()
  player = createSprite(30,30,20,20)
  player.shapeColor = "red"

  inimigos = new Group()
  recompensas = new Group()
  labirinto1 = new Group()
  criarLabirinto1()

  botao1 = createImg("crash1.png")
  botao1.position(400,300)
  botao1.size(150,150)
  botao1.mouseClicked(jogo1)
}

function draw(){
  background(0)
  

  
  player.collide(bordas)
  player.collide(labirinto1)
  inimigos.bounceOff(labirinto1)
  inimigos.bounceOff(bordas)
  player.collide(inimigos)
  recompensas.collide(labirinto1)
  

  if (keyDown(RIGHT_ARROW)){
    player.velocityX = 5
  }
  if (keyDown(LEFT_ARROW)){
    player.velocityX = -5
  }
  if (keyDown(UP_ARROW)){
    player.velocityY = -5
  }
  if (keyDown(DOWN_ARROW)){
    player.velocityY = 5
  }

  if(gameState ===1){
    drawSprites()
  }

  
}

function criarInimigos(num){
  for(var i = 0; i<num; i++){
    var x = random(50,550)
    var y = random(50,550)
    var sprite = createSprite(x,y,20,20)
    //sprite.addImage("imagem",imgInimigo)
    //sprite.debug = true
    sprite.shapeColor = "blue"

    var velocidades = [-2,-2,5,-1,-3,1,2,3]
    var vel = random(velocidades)
    var vell = random(velocidades)
    sprite.velocityX  = vel
    sprite.velocityY  = vell

    inimigos.add(sprite)
  }
}
  function criarRecompensas(num){
    for(var i = 0; i<num; i++){
      var x = random(50,550)
      var y = random(50,550)
      var sprite = createSprite(x,y,20,20)
      sprite.shapeColor = "yellow"
  
      recompensas.add(sprite)
    }
  }

function jogo1(){
  background("green")
  botao1.hide()
  criarInimigos(4)
  criarRecompensas(6)
  gameState = 1
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
