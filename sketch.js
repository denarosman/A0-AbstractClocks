function setup(){
	createCanvas(800, 600); // make an HTML canvas element width x height pixels
	stroke(255);
	minutePrint = 100;
	currentSecond = second();
}

function draw() {
	let wheel = ('white');
	background("#E0C5BE");
	strokeWeight(0);
	//console.log("hi");
	//minutePrint = minute();
	if  (minutePrint != minute())
	{
		minutePrint = minute();
		console.log(minute());
	}

	//if (minutePrint != minute())
	//{
	//	minutePrint = minute();
	//	console.log(minutePrint);
	//}

	var h = hour() * (60/24) * PI / 180;
	var m = minute() * PI / 180;
	var s = second() * PI / 180;

	let _60Deg = 60 * PI / 180;
	let _360Deg = 360 * PI / 180;

	var hAngle = map(h, 0, _60Deg, 0, _360Deg);
	var mAngle = map(m, 0, _60Deg, 0, _360Deg);
	var sAngle = map(s, 0, _60Deg, 0, _360Deg);

	let x = 400;
	let y = 300;
	let constant = 0.9
	let size_arc = 250 * constant;
	let size_c = 140 * constant;
	
	fill(237, 228, 222, 255); circle(x - 265,  y, size_c);  
	fill(wheel); arc(x - 265, y, size_arc, size_arc, 0, hAngle, OPEN);

	fill(237, 228, 222, 255); circle(x,  y, size_c);  
	fill(wheel); arc(x, y, size_arc, size_arc, 0, mAngle, OPEN);

	fill(237, 228, 222, 255); circle(x + 265,  y, size_c);  
	fill(wheel); arc(x + 265, y, size_arc, size_arc, 0, sAngle, OPEN);
	
	endShape();
}