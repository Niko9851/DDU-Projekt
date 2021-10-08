let station
function setup() {
  createCanvas(400, 400);
  station = new Station(200, 200)
}

function draw() {
  background(220);
  station.draw()
}
