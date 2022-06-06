function cardjs(){
const gmapButton = document.getElementById("gmap");
const basicinfonButton = document.getElementById("basicinfo");
const container = document.getElementById("container");

gmapButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

basicinfonButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
}
