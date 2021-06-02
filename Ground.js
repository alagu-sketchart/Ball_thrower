class Ground{
    constructor(x,y,width,height){
       var options = {
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,1200,25,options);
       this.width = 1200;
       this.height = 15;
       World.add(world,this.body);
    }
    display(){
        var positions = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(positions.x,positions.y,this.width,this.height);
      }
}