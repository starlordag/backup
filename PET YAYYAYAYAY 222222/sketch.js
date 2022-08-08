//Create variables here

var database = firebase.database();
var Dog, dog, happyDog;
var food, foodStock;
var foods;
var fedTime = 0;
var foodObj;
var feed,addFood;
var lastTimeFed;
var milkBottle;
var show = 1;
var hide = 0;
var showBottle = hide;

function preload(){
  //load images here
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
  milkBottle = loadImage("images/Milk.png");

}

function setup() {
  createCanvas(800, 500);

  dog.resize(150, 150);
  happyDog.resize(150, 150);
  milkBottle.resize(90,90);
  Dog = createSprite(650,300,20,20);
  Dog.addImage(dog);
  foodStock = database.ref("Food/Milk");
  foodStock.on("value",readFood);

  feed = createButton("Feed the Dog");
  feed.position(750,95);
  feed.mousePressed(deductFood);

  lastTimeFedRef = database.ref("Food/lastTimeFed");
  lastTimeFedRef.on("value",readLastFedTime);

  addFood = createButton("Add food");
  addFood.position(900,95);
  addFood.mousePressed(AddFood);

  milk = new Foods(foods,fedTime);
}


function draw() {  
  background("darkgreen");

  textSize(20);
  fill("white");
  drawSprites();
  //add styles here
  textSize(20);
  text("Last Time Fed: "+lastTimeFed,150,60);

  milk.display();
  if(showBottle === show){
    image(milkBottle,530,310,75,75);
  }
}

function AddFood(){
  foodStock.set(foods+1);
  showBottle = hide;
}

function deductFood(){
  if(foods>0){
      foodStock.set(foods-1);
      getTime();
      lastTimeFedRef.set(lastTimeFed);
      showBottle = show;
  }
}

function readFood(data){
  foods = data.val();
}

function readLastFedTime(data){
  lastTimeFed = data.val();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Phoenix");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  lastTimeFed = datetime.slice(11,16);
}



