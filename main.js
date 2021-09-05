rightX = 0
rightY = 0


function preload(){
    right_earing = loadImage('https://i.postimg.cc/NjG3tDLZ/imageedit-1-9866133478.png');
}

function setup(){
    canvas = createCanvas(300 ,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(right_earing, rightX, rightY, 30, 30);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightX = results[0].pose.rightEar.x-19;
        rightY = results[0].pose.rightEar.y+12;
    }
}

function take_snapshot(){
    save('myrightEaring.png');
}

