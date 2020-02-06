function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

var pictureNo = getRandomInt(11);
var pictureString = "i/" + pictureNo + ".jpg";

var colours = [];

var img = document.createElement('img');



img.setAttribute('src', pictureString);

var src = document.getElementById('body');
var canvas = document.getElementById('canvas');
var mode = document.getElementById('mode');
var text = document.getElementById('text');
canvas.appendChild(img);


var square1 = document.getElementById('square1');
var square2 = document.getElementById('square2');
var square3 = document.getElementById('square3');
var square4 = document.getElementById('square4');
var square5 = document.getElementById('square5');

function updateSquareWithID(square_id, input) {
  square_id.style.backgroundColor = colours[input];
}

img.addEventListener('load', function() {
  var vibrant = new Vibrant(img);
  var swatches = vibrant.swatches();
  console.log("*Here are your colours:*");
  for (var swatch in swatches) {
    if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
      // Log individual colour to console
      console.log(swatch, swatches[swatch].getHex());

      // add colours to the global array
      colours.push(swatches[swatch].getHex());
    }


  }

  src.style.backgroundColor = colours[0];
  mode.innerHTML = "Vibrant — " + colours[0].toUpperCase();

  updateSquareWithID(square1, 0);
  updateSquareWithID(square2, 1);
  updateSquareWithID(square3, 2);
  updateSquareWithID(square4, 3);
  updateSquareWithID(square5, 4);
});

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 49) {
    src.style.backgroundColor = colours[0];
    mode.innerHTML = "Vibrant — " + colours[0].toUpperCase();
    text.style.color = "#222";
  } else if (event.keyCode == 50) {
    src.style.backgroundColor = colours[1];
    mode.innerHTML = "Muted — " + colours[1].toUpperCase();
    text.style.color = "#FFF";
  } else if (event.keyCode == 51) {
    src.style.backgroundColor = colours[2];
    mode.innerHTML = "DarkVibrant — " + colours[2].toUpperCase();
    text.style.color = "#FFF";
  } else if (event.keyCode == 52) {
    src.style.backgroundColor = colours[3];
    mode.innerHTML = "DarkMuted — " + colours[3].toUpperCase();
    text.style.color = "#FFF";
  } else if (event.keyCode == 53) {
    src.style.backgroundColor = colours[4];
    mode.innerHTML = "LightVibrant — " + colours[4].toUpperCase();
    text.style.color = "#222";
  } else if (event.keyCode == 82 || event.keyCode == 114) {
    location.reload();
  }
})
