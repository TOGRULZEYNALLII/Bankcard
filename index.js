const card = document.querySelector(".card__inner");
const input = document.getElementById("expires-date");
const innputcvv = document.getElementById("inputcvv");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    card.classList.toggle("is-flipped");
  }
});
innputcvv.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    card.classList.toggle("is-flipped");
  }
});
