function setup() {
  createCanvas(windowHeight, windowWidth, WEBGL);
  normalMaterial();
}

function draw() {
  background(225,150,50);
  orbitControl();
  rotateX(1.0);
  box(mouseX,50);
  box(mouseY,130)
  box(150,mouseY)
  box(50,mouseX)
}
