const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball, box1, box2, box3;
var binImage, bin, paper;

function preload(){
    binImage = loadImage("dustbingreen.png");
    //paper = loadImage("paper.png");
}
function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    //ball.addImage(paper);
    //ball.scale = 0.5

    ball = new Ball(150,500,10);
    //ball.addImage(paper);
    
    bin = createSprite(810,485,20,20);
    bin.addImage(binImage);
    bin.scale = 0.6;

    box1 = new Box(752,505,10,120);
    box2 = new Box(812,565,130,10);
    box3 = new Box(874,505,10,120);
    ground = new Ground(500,550,1000,15);
    
    launcher = new Launcher(ball.body,{x:400, y:350});

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(200);
    
    box1.display();
    box2.display();
    box3.display();

    ground.display();
    ball.display();
    launcher.display();
     
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY}); 
}

function mouseReleased(){
    launcher.fly();
}