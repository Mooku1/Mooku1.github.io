function randomize() {
  document.getElementById('firstName').style.color = randomColors();
  document.getElementById('lastName').style.color = randomColors();
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
