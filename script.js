//your JS code here. If required.
let audio;

function playSound(src) {
	

  audio.src = src; 
  audio.play();
}

function stopSound() {
    audio.pause();
    // audio.currentTime = 0;
  
}

