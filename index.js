let newVariable = "none";

document.querySelector("#submit").addEventListener("click", show);
document.querySelector("#selectOne").addEventListener("click", runOne);
document.querySelector("#selectTwo").addEventListener("click", runTwo);
document.querySelector("#selectThree").addEventListener("click", runThree);
document.querySelector("#selectFour").addEventListener("click", runFour);
document.querySelector("#selectFive").addEventListener("click", runFive);

function show() {
  document.querySelector("#rating").classList.add("hidden");
  document.querySelector("#appreciation").classList.toggle("hidden");
}

function runOne() {
  newVariable = 1;
  document.querySelector("#selectOne").style.background = "hsl(216, 12%, 54%)";
  document.querySelector("#selectOne").style.color = "white";
  document.querySelector("#selectedValue").innerText = 1;
}

function runTwo() {
  newVariable = 2;
  document.querySelector("#selectTwo").style.background = "hsl(216, 12%, 54%)";
  document.querySelector("#selectTwo").style.color = "white";
  document.querySelector("#selectedValue").innerText = 2;
}

function runThree() {
  document.querySelector("#selectThree").style.background =
    "hsl(216, 12%, 54%)";
  document.querySelector("#selectThree").style.color = "white";
  document.querySelector("#selectedValue").innerText = 3;
}

function runFour() {
  document.querySelector("#selectFour").style.background = "hsl(216, 12%, 54%)";
  document.querySelector("#selectFour").style.color = "white";
  document.querySelector("#selectedValue").innerText = 4;
}

function runFive() {
  document.querySelector("#selectFive").style.background = "hsl(216, 12%, 54%)";
  document.querySelector("#selectFive").style.color = "white";
  document.querySelector("#selectedValue").innerText = 5;
}
