const catImage = document.getElementById("cat");
const statusText = document.getElementById("status");

const eatSound = document.getElementById("eatSound");
const sleepSound = document.getElementById("sleepSound");
const playSound = document.getElementById("playSound");

function feedCat() {
  catImage.src = "assets/cat-happy.png";
  statusText.textContent = "Yummy! Thank you 💖";
  eatSound.play();
}

function sleepCat() {
  catImage.src = "assets/cat-sleeping.png";
  statusText.textContent = "Zzz... Sweet dreams 💤";
  sleepSound.play();
}

function playCat() {
  catImage.src = "assets/cat-playing.png";
  statusText.textContent = "Wheee~ I love this yarn! 🧶";
  playSound.play();
}
