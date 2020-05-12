

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var rotationTorus = 0.02
var positive = true;
var myOtherBox = document.getElementById('myOtherBox');
var torus = document.getElementById('torus');
var myBox = document.getElementById('myBox');
var move = 0.1;

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y -= rotationSpeed;
  myOtherBox.object3D.rotation.z -= rotationSpeed;
  if(positive){
    rotationSpeed += 0.001;
    if(rotationSpeed > 0.05){
      positive = false;
    }
  }
  if(!positive){
    rotationSpeed -= 0.001;
    if(rotationSpeed <= 0.01){
      positive = true;
    }
  }
}

function spinTorus(){
  torus.object3D.rotation.y += rotationTorus;
}

function moveBoxes(){
  myOtherBox.object3D.position.x += move;
  myBox.object3D.position.z += move;
  if(myOtherBox.object3D.position.x > 5 || myOtherBox.object3D.position.x < -5 ){
    move = -(move);
  }
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(spinTorus, 16);
setInterval(moveBoxes, 16);
