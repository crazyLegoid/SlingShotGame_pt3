class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.6,
            'density':0.6
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push(); 
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill(100);
        //rect(pos.x, pos.y, this.width, this.height)
        
        pop();
      }
}