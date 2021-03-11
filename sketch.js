const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer;
var ground;


function setup() {
  var canvas = createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //ground = new Ground(450,300,900,20);
  hammer = new Hammer(0,0,110,40);
  
  }

function draw() {
  rectMode(CENTER);  
  background("black"); 

 
  hammer.display();
  //ground.display();
 
  fill("white")
  stroke("white");
  textSize(20);
  text("hammer",mouseX-35,mouseY+7);
  drawSprites();

  }