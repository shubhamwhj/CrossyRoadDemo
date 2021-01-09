var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
  carAnimation1=loadAnimation("images/car1.png");
  carAnimation2=loadAnimation("images/car2.png");
  playerAnimation=loadAnimation("images/Player-03.png");
  logAnimation=loadAnimation("images/log2.png");
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  //Grasses where player can rest
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    bottomGrass1.shapeColor = "green";
  }
  
  //To create rows of car
   for(var i = 0; i < 40; i++){
     cars = new Car(2);
     carGroup1.add(cars.spt);
   }

  //To create rows of Logs
    for(var i = 0; i < 40; i++){
      log = new Log(-3);
      logGroup1.add(log.spt);
    }

    //create player
    player = new Player(width/2,height-75,50,50);
    
    school=createSprite(width/2,-1500,300,300);
    school.shapeColor="red";
 }

function draw() {
  background("skyblue");

  //Making the cars re-apper
  for(i=1;i<carGroup1.length;i++) {
    if(carGroup1[i].x>width)
    {
     carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0)
    {
      carGroup1[i].x=width;
    }
  }

  //making the logs reapper
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;
    }
  }

  translate(0,-player.spt.y+height-150);

  //to make the player go to the starting position if he will touch car
  if(carGroup1.isTouching(player.spt)){
        player.spt.x = width/2;
        player.spt.y = height-75;
   }

  //to make the player float on the logs and if he will touch the river then he will again start 
 
  if(logGroup1.isTouching(player.spt)){  
    player.spt.x= player.spt.x-3;
   }
   else if((player.spt.y > height-1550 && player.spt.y < height-1300) ||
           (player.spt.y < height-500 && player.spt.y > height-850)|| 
           (player.spt.y>height)||
           (player.spt.x<0)||
           (player.spt.x>width)){

            player.spt.x = width/2;
            player.spt.y = height-75;
  }

//Win state
if(school.isTouching(player.spt)){
   gameState = "Win";
   console.log("WINNER");
}

 if(gameState === "Win")
 {
  stroke("Green");
  fill("Green");
  textSize(40);
  text("Congratulations! You Made It",width/2-250,-1700);
  player.spt.destroy();
  carGroup1.destroyEach();
  logGroup1.destroyEach();
 } 
  drawSprites();
}


function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }

}