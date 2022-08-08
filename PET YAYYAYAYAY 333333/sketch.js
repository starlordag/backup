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
var gameState, readGameState;
var currentTime;
var bedRoom, Garden, Washroom;

function preload(){
  //load images here
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
  milkBottle = loadImage("images/Milk.png");
  bedRoom = loadImage("images/BedRoom.png");
  Garden = loadImage("images/Garden.png");
  Washroom = loadImage("images/WashRoom.png");

}

function setup() {
  createCanvas(800, 500);
  dog.resize(150, 150);
  happyDog.resize(150, 150);
  milkBottle.resize(90,90);
  bedRoom.resize(800,800);
  Dog = createSprite(650,300,20,20);
  Dog.addImage(dog);
  foodStock = database.ref("Food/Milk");
  foodStock.on("value",readFood);

  lastTimeFedRef = database.ref("Food/lastTimeFed");
  lastTimeFedRef.on("value",readLastFedTime);

  gameStateRef = database.ref("Food/gameState");
  gameStateRef.on("value",readGameState);
  //gameStateRef.set("Hungry");

  feed = createButton("Feed the Dog");
  feed.position(750,95);
  feed.mousePressed(deductFood);

  addFood = createButton("Add food");
  addFood.position(900,95);
  addFood.mousePressed(AddFood);

  milk = new Foods(foods,fedTime);
}


function draw() {  
  getTime();
  
  //alert(currentTime)
  //alert(lastTimeFed)
  //if(currentTime >= (lastTimeFed + 1) && currentTime < (lastTimeFed + 4)){
 

  if(currentTime >= lastTimeFed + 1 && currentTime < lastTimeFed + 2){
    image(bedRoom,0,0,800,500);
  }
  else if(currentTime >= lastTimeFed + 2 && currentTime < lastTimeFed + 3){
    image(Washroom,0,0,800,500);
  }
  else if(currentTime >= lastTimeFed + 3 && currentTime < lastTimeFed + 4){
    image(Garden,0,0,800,500);
  }

  if (currentTime >= (lastTimeFed + 1) && currentTime < (lastTimeFed + 4)) {
    gameState = "notHungry";
    gameStateRef.set("notHungry");
    feed.hide();
    addFood.hide();
  } else{
    gameState = "Hungry";
    gameStateRef.set("Hungry");
  }
 // textSize(20);
  if(gameState === "Hungry"){
    background("darkgreen");

    textSize(20);
    fill("white");
    drawSprites();
    //add styles here
    textSize(20);
    if(lastTimeFed<12){
      text("Last Time Fed: "+lastTimeFed+" AM",150,60);
    }
    else{
      text("Last Time Fed: "+parseInt(lastTimeFed-12)+" PM",150,60);
    }
    
    milk.display();
    if(showBottle === show){
      image(milkBottle,530,310,75,75);
    }
  }
}

function AddFood(){
  foodStock.set(foods+1);
  showBottle = hide;
}

function deductFood(){
  if(foods>0){
      foodStock.set(foods-1);
      updateLastFedTime();
      lastTimeFedRef.set(lastTimeFed);
      showBottle = show;
  }
}

function readFood(data){
  foods = data.val();
}

function readLastFedTime(data){
  lastTimeFed = parseInt(data.val());
}

function readGameState(data){
  gameState = data.val();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  currentTime = parseInt(datetime.slice(11,14));
}

function updateLastFedTime(){
  getTime();
  lastTimeFed = currentTime;
}



