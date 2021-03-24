var paper1;
var ground;

var boxLeftSprite,boxBase,boxRightSprite;
var boxLeftBody,boxBottomBody,boxRightBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	
  engine = Engine.create();
	world = engine.world;

    boxPosition=width/2+200;
	  boxY=height-100;
    

  boxLeftSprite = createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
  World.add(world , boxLeftBody);

	boxBase = createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20);
	World.add(world , boxBottomBody);

	boxRightSprite = createSprite(boxPosition+200,boxY,20,100);
	boxRightSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world , boxRightBody);
   
  ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

  ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.
    paper1 = new Paper(200,450,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
  paper1.display();
 
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}