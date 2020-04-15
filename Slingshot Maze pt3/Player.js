class Player extends BaseClass{

    constructor(x, y, angle){

        super(x, y, 40, 40);
        this.image = loadImage("sprites/Player.png");
    
    }

    display(){

        
        super.display();
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        scale(2);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


    }
}