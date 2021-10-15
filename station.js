class Station {
  constructor(x, y, id){
    this.x = x
    this.y = y
    this.size = 15
    this.id = id
  }
  update(){
  }
  draw(){
      ellipse(this.x, this.y, this.size)
  }
}
