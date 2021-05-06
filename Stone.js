class Stone {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0,
          friction: 1,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.r = this.width/2;

      this.image = loadImage("t/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //pos.x = mouseX;
      //pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      pop();
    }
  };
