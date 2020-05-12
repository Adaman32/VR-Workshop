

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var positive = true;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y -= rotationSpeed;
  myOtherBox.object3D.rotation.z -= rotationSpeed;
  if(positive){
    rotationSpeed += 0.001;
    if(rotationSpeed > 0.1){
      positive = false;
    }
  }
  if(!positive){
    rotationSpeed -= 0.001;
    if(rotationSpeed <= 0.01){
      positive = true;
    }
  }
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
