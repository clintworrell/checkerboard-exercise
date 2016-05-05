var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 81; i++) {
  var tile = document.createElement("div");
  if (i % 2 === 0) {
    tile.style.backgroundColor = "black";
  }
  else {
      tile.style.backgroundColor = "red";
  }
  tile.style.width = "11.1%";
  tile.style.paddingBottom = "11.1%";
  tile.style.float = "left";
  body.appendChild(tile);
}
