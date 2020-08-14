var clicker = document.querySelector("#clicker");
clicker.addEventListener("click" , counter);
var i = 0;
function counter(){i++
font=font + 0.2;}
clicker.innerHTML = i;
clicker.stylefontSize = font + "px";


var colorChanger = document.querySelector("#colorchanger");
colorChanger.addEventListener("click", changeColor);

function changeColor(){var r = Math.floor(Math.random()* 256)
var g = Math.floor(Math.random()* 256)
var b = Math.floor(Math.random()* 256)

document.body.style.backgroundColor = "rgb(" + r +" + g + ", " + b ")";

}