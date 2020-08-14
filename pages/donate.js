
var colorChanger = document.querySelector("#colorChanger");

function changeColor(){
  var r = Math.floor(Math.random()* 256)
 var g = Math.floor(Math.random()* 256)
 var b = Math.floor(Math.random()* 256)

 document.body.style.backroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
 //backround-color = rgb(r, g, b)
}