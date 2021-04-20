var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

block1 = createSprite(110,590,185,15);
block1.shapeColor = "blue";

block2 = createSprite(310,590,185,15);
block2.shapeColor = "red";

block3 = createSprite(510,590,185,15);
block3.shapeColor = "yellow";

block4 = createSprite(710,590,185,15);
block4.shapeColor = "green";

    //create box sprite and give velocity
ball = createSprite(random(20,750),60,35,35);
ball.velocityX = 3;
ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);



    //add condition to check if box touching surface and make it box
if(ball.isTouching(block1)){
    ball.bounceOff(block1);
    ball.shapeColor = "blue";
    music.play();
}

if(ball.isTouching(block2)){
    ball.bounceOff(block2);
    ball.shapeColor = "red";
    music.stop();
}

if(ball.isTouching(block3)){
    ball.bounceOff(block3);
    ball.shapeColor ="yellow";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();

}

if(ball.isTouching(block4)){
    ball.bounceOff(block4);
    ball.shapeColor = "green";
    music.stop();
}


    drawSprites();
}
