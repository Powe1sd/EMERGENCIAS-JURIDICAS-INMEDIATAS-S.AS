document.getElementById("header").addEventListener("click", function () {
  document.getElementById("full-image").style.display = "block";
});

document.getElementById("full-image").addEventListener("click", function () {
  this.style.display = "none";
});
