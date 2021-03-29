const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var options={
  isStatic : true
}

  ground=Bodies.rectangle(200, 390, 200, 20, options);
  World.add(world, ground);

var ball_options={
  restitution: 1
}

  ball=Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

}

function draw() {
  background(255,255,255);  

Engine.update(engine);

rectMode(CENTER);
rect(200, 200, 50, 50);

rectMode(CENTER);
rect(ground.position.x, ground.position.y, 200, 20);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);

}