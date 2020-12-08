const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground
var boxes = [],thread,bobby


function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world = engine.world

  ground=new Floor(400,790,800,20)

  for(i = 755; i>400; i-=50){
    boxes.push(new Box(80,i,50,50))
  }
  for(i = 755; i>400; i-=50){
    boxes.push(new Box(720,i,50,50))
  }
  bobby=new Bob(400,600,100)
  thread=new Slingshot(bobby.body,{x:400,y:0})

}

function draw() {
  Engine.update(engine)

  background(255); 

  ground.display() 

  for(k = 0;k<boxes.length;k++){
    boxes[k].display()
  }

  bobby.display()

  thread.display();

  text(mouseX+","+mouseY,mouseX,mouseY)
}

function mouseDragged() {
  Matter.Body.setPosition(bobby.body, { x: mouseX, y: mouseY })
}