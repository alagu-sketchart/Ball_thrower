const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,500,10);

	ground = new Ground(400,700,800,25);

	box1 = new Box(575,640,25,100);
	box2 = new Box(650,678,170,25);
	box3 = new Box(725,640,25,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y: -15})
	}
}