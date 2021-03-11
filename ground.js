class Ground{
	constructor(x,y,width,height){
		var options = {
			isStatic:true
		}

		Bodies.rectangle(x,y,width,height,options)
     this.width = width;
     this.height = height;
     World.add(world,this.body);

	}

   display(){
     push();
		var pos = this.body.position;
     rectMode(CENTER);
     fill("orange")
     rect(pos.x,pos.y, this.width, this.height);
     pop();
   }
};



