const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2;
var player;
var rstring;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var gameState;
var TRUE = 0;
var FALSE = 1;
var index = 0;

function setup(){

    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    if(index <= 5){

        player = new Player2(150, 230);
        index++;

    }else{

        player = new Player(player.x, player.y);
        index++;

    }

    ground = new Ground(400, 390, 800, 25);
    rstring = new RString(player.body, {x:150, y:230});
    ground2 = new Ground(595, 260, 200, 25);
    box1 = new Box(520, 180, 20, 40, 90);
    box2 = new Box(550, 180, 20, 40, 90);
    box3 = new Box(580, 180, 20, 40, 90);
    box4 = new Box(610, 180, 20, 40, 90);
    box5 = new Box(640, 180, 20, 40, 90);
    box6 = new Box(670, 180, 20, 40, 90);
    box7 = new Box(595, 140, 150, 20, 90);
    box8 = new Box(535, 100, 20, 40, 90);
    box9 = new Box(565, 100, 20, 40, 90);
    box10 = new Box(595, 100, 20, 40, 90);
    box11 = new Box(625, 100, 20, 40, 90);
    box12 = new Box(655, 100, 20, 40, 90);
    box13 = new Box(595, 70, 100, 20, 90);
    
    

    gameState = TRUE;
}

function draw(){

    background(0);
    Engine.update(engine);
    ground.display();
    player.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    rstring.display();

}

function mouseDragged(){
    if(gameState === TRUE){

        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
        

    }
}


function mouseReleased(){
    rstring.fly();
    gameState = FALSE;
}

function keyPressed(){
    if(keyCode === 32){
        rstring.attach(player.body);
        player.x = 200;
        player.y = 210;
        gameState = TRUE;
    }
}