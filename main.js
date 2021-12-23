noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,550);
  canvas.position(560,150);

  Posenet=ml5.poseNet(video,modelloaded);
  Posenet.on('pose',gotPoses);
}
function modelloaded(){
  console.log("The model is loaded be happy");
}
function draw(){
  background('black');
  document.getElementById("square_side").innerHTML='width and height of square will be='+difference+"px";
  fill('yellow');
  stroke('yellow');
  square(noseX,noseY,difference);
}




function gotPoses(result){
if (result.length>0){
  console.log(result);
  noseX=result[0].pose.nose.x;
  noseY=result[0].pose.nose.y;
  console.log("noseX="+noseX+"noseY="+noseY);

  leftwristX=result[0].pose.leftWrist.x;
  rightwristX=result[0].pose.rightWrist.x;
  difference=floor(leftwristX-rightwristX);
  console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX);
}
}

