const target = document.getElementById("target");
function moveTarget() {
  const maxWidth = 400;
  const maxHeight = 400;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

target.addEventListener("click", function () {
  moveTarget();
});

yes.addEventListener("click", function () {
  alert("I Love You Too ");
});
