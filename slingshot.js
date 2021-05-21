class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(188,67,67);
            if(pointA.x<220){
            line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
            }
            else{
            line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
            }
        }
    }
    
}