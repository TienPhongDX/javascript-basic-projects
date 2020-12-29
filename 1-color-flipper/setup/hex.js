const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getrandomHex() {
  var randomNumber = getRandomNumber();
  var hexColor = hex[randomNumber].toString();
  for (var i = 0; i < 5; i++) {
    randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  return hexColor;
}

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let hexColor = "#"+getrandomHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});

