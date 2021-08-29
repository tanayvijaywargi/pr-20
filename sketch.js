var background1
var cat1,cat2,cat3,cat4,cat
var mouse1,mouse2,mouse3,mouse4,mouse

function preload() {
    //load the images here
    background1=loadImage("garden.png")
    cat1=loadAnimation("cat1.png")
    cat2=loadAnimation("cat2.png")
    cat3=loadAnimation("cat3.png")
    cat4=loadAnimation("cat4.png")
    mouse1=loadAnimation("mouse1.png")
    mouse2=loadAnimation("mouse2.png")
    mouse3=loadAnimation("mouse3.png")
    mouse4=loadAnimation("mouse4.png")





}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(900,600)
    cat.addAnimation("catSitting",cat1)
    cat.scale=0.2
    mouse=createSprite(200,500)
    mouse.addAnimation("mouseRunning",mouse1)
    mouse.scale=0.2
    makeCatWalk()

}

function draw() {


    background(background1);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){

        cat.velocityX=0
        cat.addAnimation("catEating",cat3)
        cat.x=200
        cat.changeAnimation("cat4")
        mouse.velocityX=0
        mouse.addAnimation("mouseEating",mouse3)
        mouse.changeAnimation("mouse4")
        cat.scale=0.3
        mouse.scale=0.3

    }

    drawSprites();
}
function makeCatWalk(){
     mouse.addAnimation("mouseTeasing", mouse2)
      mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;
        cat.velocityX = -5;
         cat.addAnimation("catRunning", cat2);
          cat.changeAnimation("catRunning"); 
        }


function keyPressed(){

  //For moving and changing animation write code here


}
