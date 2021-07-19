const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var con;
var ball2;
var con2;
var ball3;
var con3;
var ball4;
var con4;
var ball5;
var con5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution:1
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	ball = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball3);

	ball4  = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(300,100,20,ball_options);
	World.add(world,ball5);


	 
	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
	pointA:{x:400,y:100},
	bodyB:ball2,
	pointB:{x:0,y:0},
	length:200,
	stiffness:0.1
	});

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1,

	});

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con4);
	
	con5 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con5);
	 
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con.pointA.y,ball5.position.x,ball5.position.y);
  pop();

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.10,y:0});
    }
}
