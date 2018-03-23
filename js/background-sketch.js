var al = 100;
var ovalY = 375;

var a1 = 64;
var a2 = 10;
var a3 = -30;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.position(0, 0);

    ellipseMode(CENTER);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}


function draw() {
    background(239, 239, 239);

    noStroke();
    // orange oval
    fill(255, 156, 0, al);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a1));
    ellipse(0, 0, 650, 200);
    pop();

    // purple oval
    fill(207, 209, 255, al+10);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a2));
    ellipse(0, 0, 650, 200);
    pop();

    // pink oval
    fill(255, 185, 187, al);
    push();
    translate(windowWidth / 2, ovalY)
    rotate(radians(a3));
    ellipse(0, 0, 650, 200);
    pop();

    a1 += 1;
    a2 -= 2;
    a3 += 0.5;
}

function mouseWheel() {
    if (al - event.delta <= 100) {
        al -= event.delta / 3;
    }
}
