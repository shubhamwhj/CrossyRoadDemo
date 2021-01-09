class Player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
		this.spt=createSprite(this.x, this.y, this.width,this.height);
		this.spt.shapeColor="orange";
		this.spt.addAnimation("player",playerAnimation);
		this.spt.scale=0.05;
		this.spt.debug=true;
    }
    
	move(xdir,ydir){
        this.spt.x += xdir*grid;
		this.spt.y += ydir*grid;
		console.log(this.spt.height)
    }
	
}