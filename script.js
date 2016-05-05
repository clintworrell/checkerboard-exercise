var body = document.getElementsByTagName("body")[0];

var cyanAlpha = 1;
var blueAlpha = 1;
for (var i = 0; i < 81; i++) {
  var tile = document.createElement("div");
  if (i % 2 === 0) {
    tile.style.backgroundColor = "rgba(62, 211, 253, " + blueAlpha + ")";
    blueAlpha -= 0.015;
  }
  else {
    tile.style.backgroundColor = "rgba(207, 44, 248, " + cyanAlpha + ")";
    cyanAlpha -= 0.015;
  }
  tile.style.width = "11.1%";
  tile.style.paddingBottom = "11.1%";
  tile.style.float = "left";
  body.appendChild(tile);
}
