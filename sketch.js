
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var polygon;
var b1;

function preload(){
	 polygonIMG=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 500);
  
	engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700,375,450,20);

	polygon = new Polygon(135,305,100,100);

	b1 = new Mango(520,335,60,60);
	b2 = new Mango(580,335,60,60);
	b3 = new Mango(640,335,60,60);
	b4 = new Mango(700,335,60,60);
	b5 = new Mango(760,335,60,60);
	b6 = new Mango(820,335,60,60);
	b7 = new Mango(880,335,60,60);
	b8 = new Mango(580,275,60,60);
	b9 = new Mango(640,275,60,60);
  b10 = new Mango(700,275,60,60);
	b11 = new Mango(760,275,60,60);
	b12 = new Mango(820,275,60,60);
	b13 = new Mango(640,215,60,60);
	b14 = new Mango(700,215,60,60);
	b15 = new Mango(760,215,60,60);
	b16 = new Mango(700,155,60,60);

	c = new Constraint(polygon.body,{x: 165, y: 305});
	
	
   
}


function draw() {
  background(220);
  Engine.update(engine)

  ground.display();

  polygon.display();
  
  fill("red")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("orange")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("yellow")
  b13.display();
  b14.display();
  b15.display();
  fill("green")
  b16.display();

 

  c.display();
 
}



function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX,y:mouseY});
}    


function mouseReleased(){
    c.fly();
}


function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(polygon.body,{x:135,y:305})
	c.attach(stone.body)}

}
