const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,775,480,30)

  division1= new Divisions(96,610,10,300)
  division2= new Divisions(0,610,10,300)
  division3= new Divisions(192,610,10,300)
  division4= new Divisions(288,610,10,300)
  division5= new Divisions(384,610,10,300)
  division6= new Divisions(480,610,10,300)
  
  plinko1= new plinko(100,100,10)

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display()
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  drawSprites();
}