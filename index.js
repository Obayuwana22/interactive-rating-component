let submit = document.querySelector("#submit").addEventListener("click", run);
let ratingNumbers = document.querySelectorAll(".listItem");
let rating = document.querySelector("#rating");
let appreciation = document.querySelector("#appreciation");
let selectedValue = document.querySelector("#selectedValue");

function run() {
  rating.classList.add("hidden");
  appreciation.classList.toggle("hidden");
}

function removeSelectedClass() {
  ratingNumbers.forEach(function (rate) {
    if (rate.classList.contains("selected")) {
      rate.classList.remove("selected");
    }
  });
}

function toggleSelection(element) {
  removeSelectedClass();
  element.classList.toggle("selected");
}
