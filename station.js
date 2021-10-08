class Station {
  constructor(x, y){
    this.x = x
    this.y = y
    this.population = 100
  }
  update(){

  }
  draw(){
    ellipse(this.x, this.y, this.population)
  }

}
