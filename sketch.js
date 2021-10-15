let stations = []
let trains = []
let people = []
function setup() {
  createCanvas(800, 800);
  for (i = 0; i < 4; i++){
  stations.push(new Station(random(750, 50), random(750, 50), stations.length))
  }
  trains.push(new Train(0, 1))
  trains.push(new Train(1, 2))
  trains.push(new Train(2, 3))

for (i = 0; i < 10; i++){
  people.push(new Person(floor(random()*stations.length), people.length))
}
  for (i of stations){
    print("Station " + i.id)
  }

  for (i of people){
    print("Person " + i.id + " Location " + i.location)
  }
}

function draw() {

  background(220)
  fill(255)
  for (i of trains){
    i.update()
  }
  for (i of stations){
    i.draw()
  }
  for (i of trains){
    i.draw()
  }
  fill(color("red"))
  for (i of people){
    i.draw()
  }
}
