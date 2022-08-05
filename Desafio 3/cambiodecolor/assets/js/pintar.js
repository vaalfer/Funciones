
// 3.1
let ele = document.getElementById("ele1");
function pintar() {
  ele.style.backgroundColor = "yellow"
}
ele.addEventListener("click", pintar)

//3.2
let el = document.getElementById("ele1");
function pintar(color = "green") {
  el.style.backgroundColor = color;
}
el.addEventListener("click", function () {
  pintar("yellow")
} )