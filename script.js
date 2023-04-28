//your JS code here. If required.
let audio;

function playSound(filename) {
  stopSound(); // Stop any currently playing sounds

  audio = new Audio("sounds/" + filename);
  audio.play();
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

