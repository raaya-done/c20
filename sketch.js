var fr,mr;



function setup() {
  createCanvas(1000,400);
   mr = createSprite(400,300,50,80);
   mr.velocityY=-3;
   mr.velocityX=-5;
   fr = createSprite(200, 200, 80, 50);
   fr.velocityY= 2;
   fr.velocityX =5;
   mr.shapeColor="green";
   fr.shapeColor="green";
   console.log(mr.x-fr.x);

}

function draw() {
  background(255,255,255);  
 
  if(mr.x-fr.x< mr.width/2 + fr.width/2 && fr.x-mr.x<mr.width/2 + fr.width/2 ){
   mr.velocityX=mr.velocityX*(-1);
   fr.velocityX=fr.velocityX*(-1);
  }
if(mr.y-fr.y<mr.height/2 +fr.height/2 && fr.y-mr.y<mr.height/2 +fr.height/2){
  mr.velocityY=mr.velocityY* (-1) ;
  fr.velocityY=mr.velocityY*(-1);
}
  
  
  
  
  
  
  drawSprites();


}