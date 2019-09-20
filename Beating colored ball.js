function setup() {
  createCanvas(400, 400);
}

var ballX = 30
var ballsize = 5

var color1 = 100
var colorChange = 5

var color2 = 255
var colorChange2 = -5

function draw() {
  background(220);
  
  fill(color1, 230, color2);
  ellipse(200, 200, ballX);

  ballX = ballX + ballsize
  color1 = color1 + colorChange
  color2 = color2 + colorChange2
  
  if (ballX >= 200) {
    ballsize = -10;
  }
  if (ballX <= 60) {
    ballsize = 8;
  }
  if (color1 >= 250) {
    colorChange = -10;
  }
  if (color1 <= 100){
    colorChange = 5;
  }
  if (color2 >= 250) {
    colorChange2 = -5;
  }
  if (color2 <= 100){
    colorChange2 = 10;
  }
  
}
