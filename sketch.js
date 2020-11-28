var maxdrops=100;

function preload(){
    
}

function setup(){
   createCanvas(1000,800);
    
}

function draw(){
    background(rgb(36,41,36))
 for(var i=0; i<maxdrops; i++){
     drops.push(new createDrop(random(0,400),random(0,400)));
 }
 i.display();
}   

