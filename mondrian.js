function setup() {
  createCanvas(600, 600);
  strokeCap(SQUARE);
}

function draw() {
  background(251,245,229);
  noStroke();

  // Red square
  fill(182, 25, 48);
  rect(0, 360, 240, 240);

  // Blue square
  fill(39, 74, 142);
  rect(530, 360, 70, 80);

  stroke(0);
  strokeWeight(20);
  line(0, 350, 600, 350); // Horizontal line
  line(250, 0, 250, 600); // left line  
  
  strokeWeight(16);
  line(523, 360, 523, 600); // middle line

  strokeWeight(40);
  line(530, 455, 600, 455); // right line

  strokeWeight(18);
  line(240, 583, 520, 583); // bottom

}
