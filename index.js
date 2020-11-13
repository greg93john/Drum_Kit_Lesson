
var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){playDrumSound(this.innerText); buttonAnimation(this.innerText);})
}

document.addEventListener("keydown", function(event){playDrumSound(event.key); buttonAnimation(event.key);});

function playDrumSound(letter) {
  var audioName = "sounds/";
  switch(letter){
    case 'w':{audioName += "tom-1.mp3";}
      break;
    case 'a':{audioName += "tom-2.mp3";}
      break;
    case 's':{audioName += "tom-3.mp3";}
      break;
    case 'd':{audioName += "tom-4.mp3";}
      break;
    case 'j':{audioName += "snare.mp3";}
      break;
    case 'k':{audioName += "crash.mp3";}
      break;
    case 'l':{audioName += "kick-bass.mp3";}
      break;
    default: console.log(this.innerText);
  }
  var audio = new Audio(audioName);
  audio.play();
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeOut(function(){activeButton.classList.remove("pressed");},100);
}
