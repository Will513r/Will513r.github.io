var trickBtn = document.querySelector(".trick");

trickBtn.addEventListener("mouseover", function() {
  this.textContent = "LOL";
})
trickBtn.addEventListener("mouseout", function() {
  this.textContent = "Click Me";
})