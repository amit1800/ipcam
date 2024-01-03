//var math = require("@stdlib/math");
//console.log(math.base.assert.isEven(6));

console.log("hello");
var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");

// player = new JSMpeg.Player("rtsp://admin:admin@192.168.29.156:1935", {
//   canvas: canvas,
// });
player1 = new JSMpeg.Player("http://localhost:3000/one", {
  canvas: canvas1,
});
player2 = new JSMpeg.Player("http://localhost:3000/two", {
  canvas: canvas2,
});
function stop() {
  player1.stop();
  player2.stop();
}
function start() {
  player1.play();
  player2.play();
}
var a = true;
function handleButton() {
  if (a) {
    stop();
    document.getElementById("button").innerHTML = "play";
    a = !a;
  } else {
    start();

    document.getElementById("button").innerHTML = "pause";
    a = !a;
  }
}
