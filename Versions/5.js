// Positive and Negative
function setup() {
    createCanvas(720, 400);
    stroke(255);
    minutePrint = minute();  
  }
  
  function draw() {
    let backgroundColor = (237, 230, 232);
    background(backgroundColor);
    //stroke(255); 
    stroke(backgroundColor);
    strokeWeight(1);
  
  
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
    let y = height/10;
    let x = -100;
  
    // hour 
    fill(244, 67, 54); arc(y+50, x-150,100,100,hAngle, 0, PIE);
      
    // minutes 
    fill(4, 241, 0); arc(y+50, x,100,100,mAngle, 0, PIE);
    
    //seconds 
    fill('yellow'); arc(y+50, x + 150,100, 100, sAngle, 0, PIE);
      
    // hour 
    fill(244, 67, 54); circle(y-160, x-150,100);
    fill(backgroundColor); arc(y-160, x - 150,100,100, hAngle, 0, PIE);
    
    // minutes 
    fill(4, 241, 0); circle(y - 160, x,100);
    fill(backgroundColor); arc(y - 160, x,100,100, mAngle,0, PIE);
    
    //seconds 
    fill('yellow'); circle(y-160, x+150,100);
    fill(backgroundColor); arc(y-160, x+150,100,100, sAngle, 0,  PIE);
  
    endShape();
  
  }