
 noseX=0;
 noseY=0;
 difference=0;
leftwristx=0;
rightwristx=0;
 function preload() {
}
 function setup() {
     video=createCapture(VIDEO);
     video.size(500,350);
     video.hide();
     canvas=createCanvas(500,350);
     canvas.center();
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
 }
 function modelLoaded() {
     console.log('PoseNet is started');
 }
 function gotPoses(results) {
     
  if(results.length > 0){
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX=" + noseX + "noseY=" + noseY);

      leftwristx=results[0].pose.leftwrist.x;
      rightwristx=results[0].pose.rightwrist.x;
      difference=floor(leftwristx-rightwristx0);
      console.log("leftwristx=" + leftwristx + "rightwristx=" + rightwristx +
      "difference=" + difference);
    }
    }
    function draw() {
    background('#08050a');
    document.getElementById("square_side").innerHTML="width and height of a square will be =" + difference+ "px";
   fill('#a13fe8');
   stroke('2791#32');
   square(noseX,noseY,difference);

    }
