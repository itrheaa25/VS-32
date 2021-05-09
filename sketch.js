const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise1, sunrise2, sunrise3, sunrise4, sunrise5, sunrise6;
var sunset7, sunset8, sunset9, sunset10, sunset11, sunset12; 

var bg ;

function preload() {
    
    getBackgroundImg();
   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json()
var dt = responseJSON.datetime
var hour = dt.slice(11,13)
console.log(hour)

if(hour>05 && hour < 06 ){
    backgroundImg = loadImage("sunrise1.png")
}else if(hour>07 && hour < 08 ){
    backgroundImg = loadImage("sunrise2.png")
}else if(hour>09 && hour < 010 ){
    backgroundImg = loadImage("sunrise3.png")
}else if(hour>10 && hour < 11 ){
    backgroundImg = loadImage("sunrise4.png")
}else if(hour>12 && hour < 13 ){
    backgroundImg = loadImage("sunrise5.png")
}else if(hour>14 && hour <15 ){
    backgroundImg = loadImage("sunrise6.png")
}else if(hour>16 && hour <17 ){
    backgroundImg = loadImage("sunset7.png")
}else if(hour>18 && hour <19 ){
    backgroundImg = loadImage("sunset8.png")
}else if(hour>20 && hour <21 ){
    backgroundImg = loadImage("sunset9.png")
}else if(hour>22 && hour <23 ){
    backgroundImg = loadImage("sunset10.png")
}else if(hour>23 && hour <00 ){
    backgroundImg = loadImage("sunset11.png")
}else {
    backgroundImg = loadImage("sunset12.png")
}

}
