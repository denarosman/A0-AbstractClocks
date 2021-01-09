function setup() {
    createCanvas(720, 400);
    stroke(255);
    minutePrint = minute();  
    currentSecond = second();
  }
  
  function draw() {
    let backgroundColor = (249, 252, 247);
    background(backgroundColor);
    //stroke(255); // make outline white
    stroke(backgroundColor);
    strokeWeight(1);
  
  // Every time the minute changes (not more frequently), print the value of minute() to the JavaScript console.  
  if (minutePrint != minute())
  {
     console.log(minutePrint);
     minutePrint = minute();
  }
    
    var h = hour() * PI/180;
    var m = minute() * PI/180;
    var s = second() * PI/180;
    let _60Deg = 60 * PI/180;
    let _360Deg = 360 * PI/180;
  
    var hAngle = map(h,0,_60Deg,0,_360Deg);
    var mAngle = map(m,0,_60Deg,0,_360Deg);
    var sAngle = map(s,0,_60Deg,0,_360Deg);
    
    translate (width/2, height/2);
    angleMode(RADIANS);
    rotate(270 * PI/180);
    let y = height/2.5;
    let x = -55;
  
    // hour 
    fill(242, 126, 99); circle(y-160, x-150,200);
    fill(backgroundColor); arc(y-160, x - 150,170,175, hAngle, 0, PIE);
    
    // minutes yellow
    fill(245, 229, 59); circle(y - 160, x+25,125);
    fill(backgroundColor); arc(y - 160, x+25,100,100, mAngle,0, PIE);
    /*
     change colors
    if (second() %2 == 0)
    {
      fill(245, 229, 59); circle(y-160, x+150,90);
    }
    else 
    {
      fill(135, 212, 138); circle(y-160, x+150,90);
    }
    */
    //seconds green
    fill(135, 212, 138); circle(y-160, x+150,90);
    fill(backgroundColor); arc(y-160, x+150,70,70, sAngle, 0,  PIE);
  
    endShape();
  }
  