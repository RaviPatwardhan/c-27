class Bob {
    constructor(x, y,width,hieght, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,50, options);
      World.add(world, this.body);
    
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('green')
     ellipse(0,0,50);
      pop();
    }
  };
  