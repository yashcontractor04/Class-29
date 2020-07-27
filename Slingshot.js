class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(85,42,19);    
            strokeWeight(4);
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+40, pointB.y-5);
            image(this.sling3,pointA.x-28,pointA.y-10,15,20);
            }
            else{
            line(pointA.x+20, pointA.y, pointB.x, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+40, pointB.y-5);
            image(this.sling3,pointA.x+20,pointA.y+5,15,20);
            }
        }
        image(this.sling1,220,70,40,150);
        image(this.sling2,195,65,40,100);
        

    }
    
}