const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800,700);

  engine = Engine.create();
	world = engine.world; 
  

  roof = new Roof (360,100,300,20);
  World.add(world,roof);

   bobObject1 = new Bob (250,300);
   bobObject2 = new Bob (300,300);
   bobObject3 = new Bob (350,300);	 
   bobObject4 = new Bob (400,300);
   bobObject5 = new Bob (450,300);

   rope1 = new Rope (bobObject1.body,roof.body,bobDiameter*2,0);
   World.add(world,bobObject1);

   rope2 = new Rope (bobObject2.body,roof.body,bobDiameter*3,0);
   World.add(world,bobObject2);

   rope3 = new Rope (bobObject3.body,roof.body,bobDiameter*4,0);
   World.add(world,bobObject3);


   rope4 = new Rope (bobObject4.body,roof.body,bobDiameter*5,0);
   World.add(world,bobObject4);


   rope5 = new Rope (bobObject5.body,roof.body,bobDiameter*6,0);
   World.add(world,bobObject5);

  
}
function mouseDragged()
{
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});




}

function mouseReleased()
{
rope.fly();
}
function draw() {
  background("pink");
  Engine.update(engine);

  roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}


function keyPressed() 
{ if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,
    {x:-730,y:-0}); 
  }
}

