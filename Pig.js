class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //the color transparency changer to 255 making it completely visible and if the value is 0 the it will completely disappear
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }
  display(){
    //if the pig is hit the visibility should be fading
    if(this.body.speed<3){
      super.display();
    }else{
      //removing the pig from the world and adding an image instead of it so it will be faded
      World.remove(world, this.body);
      push()
      tint(255,this.visibility);
      this.visibility = this.visibility - 5;
      image(this.image,this.body.position.x,this.body.position.y, 50,50);
      pop()
    }
  }

};