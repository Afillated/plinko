class plinko {
    constructor(x,y,radius){
        var options= {
            isStatic:true
        }
        this.body=circle(x,y,radius,options)
        this.radius=radius
        World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        eclipseMode(CENTER);
        fill("white");
        eclipse(pos.x, pos.y, this.radius);
    }
}