const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var engine, world;
var particle;
var ground;
var divisions=[];
var plinkos = [];
var count = 0;



var gameState="start";
//var gameState="end";
var divisionHeight=300;
var score = 0;
function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //yellow = new Divisions(width/2,450,width,5);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var h = 50; h <=width-10; h=h+50) 
    {
    
       plinkos.push(new Plinko(h,175));
    }

     for (var l = 75; l <=width; l=l+50) 
    {
    
       plinkos.push(new Plinko(l,275,10));
    }

     for (var p = 50; p <=width-10; p=p+50) 
    {
    
       plinkos.push(new Plinko(p,375,10));
    }

    

    
}
 


function draw() {
  background("black");

  mousePressed();
  textSize(20)
  text("Score: "+score,20,30);
  

  Engine.update(engine);

  
    
  

  if(particle!=null){
    particle.display();
    //gameState="end";
    if(particle.body.position.y>510){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null
        count=count+1; 
      }
    }
  }
  if(particle!=null){
    particle.display();
    //gameState="end";
    if(particle.body.position.y>510){
      if(particle.body.position.x>301 & particle.body.position.x<600){
        score=score+100;
        particle=null
       count=count+1;
      }
    }
  }
  if(particle!=null){
    particle.display();
    //gameState="end";
    if(particle.body.position.y>510){
      if(particle.body.position.x>601 & particle.body.position.x<801){
        score=score+200;
        particle=null
        count=count+1;
        
      }
    }
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for (var s = 10; s <=310; s=s+90) {
      text("500",s,550)
    }
    for (var t = 590; t <=900 & t >=430; t=t+70) {
      text("200",t,550)
    }
    for (var g = 350; g >=340 & g <=500; g=g+70) {
      text("100",g,550)
    }

   
   if(count>= 5) gameState="end";
   
     if(count >= 5) textSize(80), text("Game Over", 200,400),particle=null; 
     
   
  }

function mousePressed(gameState="end"){
   if(gameState!=="end"){
     particle = new Particle(mouseX,10,10,10);
     
      return false;
      
     } 
     
     
   }
  

