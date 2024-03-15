
import "nes.css/css/nes.min.css";

var trickBtn = document.querySelector(".trick");

trickBtn.addEventListener("mouseover", function () {
  this.textContent = "LOL Just Kidding";
});
trickBtn.addEventListener("mouseout", function () {
  this.textContent = "Click Me";
});

var i = 0;
var txt = document.getElementById("ab-me-p");

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ab-me-p").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
