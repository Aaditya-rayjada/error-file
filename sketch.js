const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;


function preload() {
  bgImg = loadImage("snow2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}