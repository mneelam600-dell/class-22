const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,390,20,object_options);
    World.add(world,object);
var options={
  restitution:0.5

}
   box1 = Bodies.circle(200,200,20,options);
   World.add(world,box1);



    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS)
    ellipse(box1.position.x,box1.position.y,20);
}
