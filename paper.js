class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0.5,
            density:1.2,
        }
      this.x=x;
      this.y=y;
      this.r=70
      this.image=loadImage("paper.png")
      
      
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y) 
        strokeWeight(3);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        ellipse(0,0,this.r, this.r);
        pop()
    }
}