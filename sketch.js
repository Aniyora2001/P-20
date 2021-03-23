
var cat,catRunning,catSitting,mouseTeasing,mouseRunning,mouse,garden,gradenImage,catWaiting;

function preload() {
    //load the images here
    catRunning=loadAnimation("cat2.png","cat3.png");
    catSitting=loadAnimation("cat1.png");
    catWaiting=loadImage("cat4.png");
   
    mouseTeasing=loadAnimation("mouse2.png","mouse3.png");
    mouseRunning=loadAnimation("mouse1.png","mouse4.png");
    gardenImage= loadImage("garden.png")
    

}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(500,400);
    garden.addImage(gardenImage);
    garden.scale=2;


    cat= createSprite(800,700,20,20);
    cat.addAnimation("sitting",catSitting);
    cat.addAnimation("running",catRunning);
   // cat.addImage(catWaiting);
    cat.scale=0.2;

    

    mouse= createSprite(400,400,30,30);
    mouse.addAnimation("running",mouseRunning);
    mouse.addAnimation("teasing",mouseTeasing);
    
    mouse.scale=0.2;
     
    


}

function draw() {

    background(255);

    mouse.debug=true;
     mouse.setCollider("rectangle",100,100,600,700)
     cat.debug=true;
     cat.setCollider("rectangle",20,21,1100,800);
       garden.debug=false;
    keyPressed();

   /* if(mouse.x - cat.x    <= mouse.width/2  + cat.width/2
    && cat.x   - mouse.x  <= mouse.width/2  + cat.width/2
    && mouse.y - cat.y    <= mouse.height/2 + cat.height/2
    && cat.y   - mouse.y  <= mouse.height/2 + cat.height/2)
    {
        mouse.velocityX=0;
        mouse.velocityY=0;
        cat.velocityX=0;
        cat.velocityY=0;
        mouse.changeAnimation("teasing",mouseTeasing);
        cat.addAnimation("wait",catWaiting)
        cat.changeAnimation("Wait",catWaiting);
    }*/


    
    drawSprites();
}


function keyPressed()
{
    if (keyDown("space"))
    {
        mouse.changeAnimation("running",mouseRunning)
       // cat.addAnimation("running",catRunning)
        cat.changeAnimation("running",catRunning)
    }
    if(keyDown("LEFT_ARROW"))
    {
        
        cat.velocityX=-4;
        mouse.velocityX=-1
    }
    if(keyDown("up"))
    {
        cat.velocityY=-4;
    }

    if (keyDown("down"))
    {
        cat.velocityY=4;
    }

   /* if(keyDown("left"))
    {
        cat.velocity=-2;
    }*/

    if(keyDown("right"))
    {
        cat.velocityX=3;
    }
    //Write condition here to evalute if tom and jerry collide

    
    if ( cat.x - mouse.x < (cat.width - mouse.width)/2
       // && mouse.x-cat.x  < (mouse.width/2 - cat.width)/2)
        && mouse.y - cat.y <(mouse.height + cat.height)/2 )
        //&& mouse.y- cat.y  < mouse.height/2 + cat.height/2)
    {
        mouse.velocityX=0;
        //mouse.velocityY=0;
        
        mouse.setX=200;
        cat.velocityX=0;
        cat.velocityY=0;
        mouse.changeAnimation("teasing",mouseTeasing);
        cat.addImage("wait",catWaiting)
        cat.changeImage("wait",catWaiting);
    }
    
    
    //keyPressed();
//For moving and changing animation write code here


}
