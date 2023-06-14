rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas=createCanvas(800,400);
    canvas.position(430,130);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized !');
}

function draw()
{
    background('#969A97');
    document.getElementById("font_side").innerHTML="Font Size Of The Text Is"+difference+"px";
    fill("#FFOO7F");
    textSize(difference);
    text('Manvitha', 50, 400);
}

function gotPoses(results,error){
    if (results.length> 0)

{
 rightWristX=results[0].pose.rightWrist.x;  
 console.log("rightWristX="-rightWristX-"rightWristY="-rightWristY);

 difference =floor(rightWristX - leftWristX);
 
 leftWristX=results[0].pose.leftWrist.x;  
 console.log("leftWristX="-leftWristX-"leftWristY="-leftWristY);

}
if(error){
    console.log(error);
}
}