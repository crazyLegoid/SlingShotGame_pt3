class Box {
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution': 0.4,
          'friction': 0.8,
          'density': 0.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image1 = loadImage("Sprites/En1.png");
      this.image2 = loadImage("Sprites/En2.png");
      this.image3 = loadImage("Sprites/En3.png");
      this.Visiblity = 255;
      this.randomC = random(1, 3);

      World.add(world, this.body);
  }
  display() {

      if (this.body.speed < 7) {
          var angle = this.body.angle;
          var pos = this.body.position
          var color = random(0, 10);
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image2, 0, 0, this.width, this.height);
          pop();
      } else {
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255, this.Visiblity);
          image(this.image2, this.body.position.x, this.body.position.y, 50, 50);
          pop();
      }
  }

  score() {
      if (this.Visiblity < 0 && this.Visiblity > -1005) {
          score++;
      }
  }

}