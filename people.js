class Person {
  constructor(station, id){
    // Personality types
    // 0. Traveller (High probablility of traveling further)
    // 1. Pendler (Travels to and from work at another station most days)
    // 2. Family Member (Travels to vacationhome or family in another city, mostly in the weekends)
    // 3. Homeless (Travels to completely random cities, short lifespan)
    //this.behavior = behavior

    // Starting city and city to return to after other travels
    this.home = station

    // Tilstand for person
    // 0. Doing something else
    // 1. Wait for Train
    // 2. Travelling
    this.state = 0

    // Hvor person befinder sig
    this.location = station

    this.id = id
  }
  update(){

  }
  draw(){
    if (this.state == 0){
      ellipse(stations[this.location].x+random(-20, 20), stations[this.location].y+random(-20, 20), 5)
    }
  }

}
