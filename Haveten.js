const box = document.getElementById("box");

const paused = document.getElementById("paused");
const running = document.getElementById("running");

paused.addEventListener("click", () => {
  box.style.animationPlayState = "paused";
});
running.addEventListener("click", () => {
  box.style.animationPlayState = "running";
});
