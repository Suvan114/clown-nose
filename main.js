noseX=0;
noseY=0;
var noseimg;

function preload(){
   noseimg=loadImage("nose.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    
}

function modelLoaded(){
    console.log("posenet is initialised")
}
function draw(){
    image(video,0,0,300,300);
    image(noseimg,noseX-34,noseY-28,75,50);
//   fill("red");
//   stroke("red");
//   circle(noseX,noseY,20)
        
}
function take_snapshot(){
    save("myFilterImage.png")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex= "+noseX+", nosey= "+noseY);
    }
    
}

