class Hammer{
   constructor(x,y,width,height){
var options = {
restitution:0.8,friction:0.3,density:1
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = 110;
this.height = 40;
World.add(world,this.body);

}

display(){
var pos = this.body.position;
pos.x = mouseX;
pos.y = mouseY;
var angle = this.body.angle;
push();
//translate(pos.x,pos.y);
//rotate(angle);
rectMode(CENTER);
fill("orange");
stroke("white");
strokeWeight(2);
//rect(pos.x,pos,y,this.width,this.height);
rect(mouseX,mouseY,this.width,this.height);
//rect(100,100,this.width,this.height);
//rect(mouseX,mouseY,this.width,this.height);
pop();
 } 
}
  