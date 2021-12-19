
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bob1, Bob2, Bob3, Bob4, Bob5, roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof= new RoofClass(200,100,200,10)
	Bob1= new Bob(100,500)
	Bob2= new Bob(150,500)
	Bob3= new Bob(200,500)
	Bob4= new Bob(250,500)
	Bob5= new Bob(300,500)


	//Create the Bodies Here.
	rope1= new RopeClass(Bob1,roof)
	rope2= new RopeClass(Bob2,roof)
	rope3= new RopeClass(Bob3,roof)
	rope4= new RopeClass(Bob4,roof)
	rope5= new RopeClass(Bob5,roof)


	Engine.run(engine);
  
}


function draw() {
	background('white');

  rectMode(CENTER);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  fill('blue')
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



