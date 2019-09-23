function setup() {
  createCanvas(400, 400);
}

var ballY = 30;
var ballSpeed = 3;

var ballY2 = 370;
var ballSpeed2 = 5;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(150, ballY, 30);
  
  fill(0, 0, 255);
  ellipse(250, ballY2, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballY <= 0) {
    ballSpeed = 3;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }

}
