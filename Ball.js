class Ball{
    constructor(x, y, radius){
        var options = {
            restitution :0.1,
            isStatic: false,
            friction :0.5,
            density :100
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = 75;
        this.height = 75;
        this.image = loadImage('paper.png');
        World.add(world,this.body);
    }

    display(){
        var positions = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, positions.x, positions.y,35,35)
        pop();
    }
}