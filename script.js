var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 81; i++) {
  var tile = document.createElement("div");
  var randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  tile.style.backgroundColor = randomHexColor;
  tile.style.width = "11.1%";
  tile.style.paddingBottom = "11.1%";
  tile.style.float = "left";
  body.appendChild(tile);
}
