class RopeClass{
    constructor(BodyA,PointB){
        var options={
            bodyA: BodyA,
            pointB: PointB,
            stiffness:0.04,
            length:7

        }


       
     this.sling=Matter.Constraint.create(options);
     World.add(world,this.sling)
    
    }
    display(){
        var BODYA=this.sling.bodyA
        var BODYB=this.sling.pointB
        if(this.sling.bodyA){
    line(BODYA.position.x,BODYA.position.y,BODYB.x,BODYB.y)
        }
      

    }
    fly(){
    this.sling.bodyA=null
    }
}