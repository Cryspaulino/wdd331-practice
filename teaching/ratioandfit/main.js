const image = document.getElementById("demoImage");
const thumbnail = document.getElementById("thumbnail");

const fitSelect = document.getElementById("fitSelect");
const ratioSelect = document.getElementById("ratioSelect");

const fitValue = document.getElementById("fitValue");
const ratioValue = document.getElementById("ratioValue");

fitSelect.addEventListener("change", () => {
  image.style.objectFit = fitSelect.value;
  fitValue.textContent = fitSelect.value;
});

ratioSelect.addEventListener("change", () => {
  thumbnail.style.aspectRatio = ratioSelect.value;
  ratioValue.textContent = ratioSelect.value;
});
