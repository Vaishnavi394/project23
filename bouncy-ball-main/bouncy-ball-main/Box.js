class Box{
constructer(x,y,width,height){
var options={
restitution: 0.8


        }
        this.Body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
 display(){
var pos=this.body.position;
rectMode(CENTER);
fill("green");
rect(pos.x,pos.y,this.width,this.height) 
 }
}