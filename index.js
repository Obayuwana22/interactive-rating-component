let submit = document.querySelector("#submit").addEventListener("click", run);
let ratingNumbers = document.querySelectorAll(".listItem");
let rating = document.querySelector("#rating");
let appreciation = document.querySelector("#appreciation");
let passInRatedValue = document.querySelector("#ratedValue");

function run() {
  let selectedValue = null;
  ratingNumbers.forEach(function (check) {
    if (check.classList.contains("selected")) {
      selectedValue = check.textContent;
    }
  });

  if (selectedValue !== null) {
    rating.classList.add("hidden");
    appreciation.classList.toggle("hidden");
    passInRatedValue.textContent = selectedValue;
  }
}

function removeSelectedClassValue() {
  ratingNumbers.forEach(function (rate) {
    if (rate.classList.contains("selected")) {
      rate.classList.remove("selected");
    }
  });
}

function toggleSelectedValue(element) {
  removeSelectedClassValue();
  element.classList.toggle("selected");
}
