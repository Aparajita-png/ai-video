video="";
status="";
objects=[];
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
}
function draw(){
image(video,0,0,480,380);
if(status!=""){
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
 document.getElementById("status").innerHTML="STATUS-OBJECTS DETECTED";
 document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+objects.length;
 fill("#FFA500");
 percent=floor(objects[i].confidence*100);
 text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
 noFill();
 stroke("#FFA500");
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="STATUS-DETECTING OBJECTS";
}
function modelLoaded(){
 console.log("modelLoaded");
 status=true;
 video.loop();
 video.speed(1);
 video.volume(0);
}
function gotResult(error,results){
if(error){
 console.error(error);
}
 else{
 console.log(results);
 objects=results;
 }
}
