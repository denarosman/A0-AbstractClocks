function setup() {
    createCanvas(windowWidth, windowHeight); 
	c1 = color(226, 197, 191);
	c2 = color(255, 255, 255);
	c3 = color(237, 228, 222, 255); 
	background(c1);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(c1);
	draw();
 }

function draw() {
	background(c1);
	strokeWeight(0);

	let _60Deg = 60 * PI / 180;
	let _360Deg = 360 * PI / 180;

	let xPos = windowWidth/2;
	let yPos = windowHeight/2;

	let constant = .9;
	let size_arc = 250 * constant;
	let size_c = 140 * constant;

	let h = [-1, hour()/24];
	let m = [0, minute()/60];
	let s = [1, second()/60];

	let units = [h, m, s]

	for (let i = 0; i < units.length; i++) {

		x = xPos + units[i][0] * 265;
		y = yPos;

		angle = map(units[i][1]/3 * PI, 0, _60Deg, 0, _360Deg);

		fill(c3); circle(x, y, size_c);  
		fill(c2); arc(x, y, size_arc, size_arc, 0, angle, OPEN);
	  }	
	endShape();
}
