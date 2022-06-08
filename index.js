const bill = document.getElementById("bill");
const people = document.getElementById("people");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("total");
const reset = document.getElementById("resetBtn");

function onInputCheck(prop, propValue) {
  if (propValue.value > 0) prop.classList.add("input-valid");
  else if (propValue.value < 0) prop.classList.add("input-invalid");
  else {
    prop.classList.remove("input-vaild");
    prop.classList.remove("input-invalid");
  }
}
function onInputExit(prop) {
  prop.classList.remove("input-valid");
}
// bill.addEventListener("input", onInputCheck(billBox, bill));
people.addEventListener("input", onInputCheck(peopleBox, people));
