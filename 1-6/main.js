let screenLog = document.querySelector("#mouse");
let cercle = document.querySelector("#cercle");
document.addEventListener("mousemove",logCer);
document.addEventListener("mousemove", logKey);
function logCer(e) {
  cercle.innerText = `cercle :${e.clientX}, ${e.clientY}`;
}
function logKey(e) {
  screenLog.innerText = `mouse: ${e.clientX}, ${e.clientY}`;
}

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});
