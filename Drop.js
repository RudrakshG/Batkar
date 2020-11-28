class Drop{
    constructor(x,y,r){
        this.body = ellipse(x,y,radius);
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.velocityY  = random(2,5);
    }
    display(){
        push();
        stroke("blue");
        fill("blue");
        ellipse(this.x, this.y, this.radius);
        pop();
    }
}