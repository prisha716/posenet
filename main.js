noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function preload() {
}
 function setup() {
     video=createCapture(VIDEO);
     video.size(500,300);
     video.hide();
     canvas=createCanvas(500,300);
     canvas.center();
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
 }
 function modelLoaded() {
     console.log('PoseNet is started');
 }
 function gotPoses(results) {
     
  if(results.length > 0){}
    }
    function draw() {
    background('#c495c0');
    }