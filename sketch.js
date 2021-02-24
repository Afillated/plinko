const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var Particle
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
  plinko1 = new plinko(60,75,10)
  plinko2 = new plinko(120,75,10)
  plinko3 = new plinko(180,75,10)
  plinko4 = new plinko(240,75,10)
  plinko5 = new plinko(300,75,10)
  plinko6 = new plinko(360,75,10)
  plinko7 = new plinko(420,75,10)
  plinko11 = new plinko(30,175,10)
  plinko12 = new plinko(90,175,10)
  plinko13 = new plinko(150,175,10)
  plinko14 = new plinko(210,175,10)
  plinko15 = new plinko(270,175,10)
  plinko16 = new plinko(330,175,10)
  plinko17 = new plinko(390,175,10)
  plinko18 = new plinko(450,175,10)
  plinko21 = new plinko(60,275,10)
  plinko22 = new plinko(120,275,10)
  plinko23 = new plinko(180,275,10)
  plinko24 = new plinko(240,275,10)
  plinko25 = new plinko(300,275,10)
  plinko26 = new plinko(360,275,10)
  plinko27 = new plinko(420,275,10)
  plinko31 = new plinko(30,375,10)
  plinko32 = new plinko(90,375,10)
  plinko33 = new plinko(150,375,10)
  plinko34 = new plinko(210,375,10)
  plinko35 = new plinko(270,375,10)
  plinko36 = new plinko(330,375,10)
  plinko37 = new plinko(390,375,10)
  plinko38 = new plinko(450,375,10)
  
  particle2=new particle(180,10,10)
  particle3=new particle(220,10,10)
  particle4=new particle(260,10,10)
  particle5=new particle(300,10,10)
  particle6=new particle(340,10,10) 
  particle7=new particle(380,10,10) 
  
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
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  
  drawSprites();
}
