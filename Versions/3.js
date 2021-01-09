function setup() {
	createCanvas(800, 600); // make an HTML canvas element width x height pixels
	stroke(255);
	minutePrint = minute();
	currentSecond = second();
}

function draw() {
	let backgroundColor = ('white');
	background(backgroundColor);
	strokeWeight(0);

	if (minutePrint != minute()) {
		minutePrint = minute();
		console.log(minutePrint);
	}

	var h = hour() * PI / 180;
	var m = minute() * PI / 180;
	var s = second() * PI / 180;
	let _60Deg = 60 * PI / 180;
	let _360Deg = 360 * PI / 180;

	var hAngle = map(h, 0, _60Deg, 0, _360Deg);
	var mAngle = map(m, 0, _60Deg, 0, _360Deg);
	var sAngle = map(s, 0, _60Deg, 0, _360Deg);

	translate(width / 2, height / 2);
	angleMode(RADIANS);
	rotate(270 * PI / 180);
	let y = height / 2.5;
	let x = -25;

	// Hour 
	fill(242, 126, 99);
	circle(y - 160, x - 150, 140);
	fill(backgroundColor); arc(y - 160, x - 150, 250, 250, hAngle, 0, PIE);

	// Minutes
	fill(245, 229, 59); circle(y - 160, x + 135, 100);
	fill(backgroundColor); arc(y - 160, x + 135, 170, 170, mAngle, 0, PIE);

	//Seconds
	fill(135, 212, 138); circle(y - 160, x + 340, 65);
	fill(backgroundColor); arc(y - 160, x + 340, 105, 105, sAngle, 0, PIE);
	endShape();
}