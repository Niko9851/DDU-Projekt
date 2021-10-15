class Train{
  constructor(id1, id2){
    this.id1 = id1
    this.id2 = id2
    this.pos = .5
    this.dx = .5/dist(stations[this.id1].x, stations[this.id1].y, stations[this.id2].x, stations[this.id2].y)
    this.carry = []
  }
  update(){
    if (this.pos >= 1){
      this.dx *= -1
      for (i of people){
        if (i.state == 0 && i.location == this.id2){
          people.slice(people.indexOf(i), 1)
          this.carry.push(i)
        }
      }
    } else if (this.pos <= 0) {
      this.dx *= -1
      for (i of people){
        if (i.state == 0 && i.location == this.id1){
          people.slice(people.indexOf(i), 1)
          this.carry.push(i)
        }
      }
    }
    this.pos += this.dx
  }
  draw(){
    ellipse(lerp(stations[this.id1].x, stations[this.id2].x, this.pos), lerp(stations[this.id1].y, stations[this.id2].y, this.pos), 10)
    line(stations[this.id1].x, stations[this.id1].y, stations[this.id2].x, stations[this.id2].y)
  }
}
