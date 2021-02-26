function preload(){

}
function setup(){
    canvas=createCanvas(1000,1000);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,0,0,550,550);
   fill(240,35,42)
   stroke(240,35,42)
   rect(0, 0, 550, 55);
   fill(240,35,42)
   stroke(240,35,42)
   rect(0, 0, 55, 550);
   fill(240,35,42)
   stroke(240,35,42)
   rect(0, 500, 550, 55);
   fill(240,35,42)
   stroke(240,35,42)
   rect(500, 0, 55, 550);
}//      x    y   h   w
function take_snapshot(){
    save('stundent_name.png');
}