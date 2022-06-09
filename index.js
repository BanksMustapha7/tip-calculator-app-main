const bill = document.getElementById("bill");
const people = document.getElementById("people");
let tipAmounted = document.getElementById("tipAmount");
let total = document.getElementById("total");
const reset = document.getElementById("resetBtn");
const totalAmount = document.getElementById("totalAmount");
const customBtn = document.getElementById("row6");
const customInput = document.querySelector(".input-custom");
const cInput = document.getElementById("customInput");
const modeSwitch = document.getElementById("modeSwitch");

let isFalse = true;
reset.disabled = isFalse;

reset.addEventListener("click", function () {
  bill.value = "";
  people.value = "";
  totalAmount.textContent = "0.00";
  total.textContent = "0.00";
  tipAmounted.textContent = "0.00";
  cInput.value = "";
  peopleValue = "";
  billValue = "";
  totalValue = "";

  btnsTip.forEach((btn) => {
    btn.classList.remove("hidden");
  });

  customInput.classList.add("hidden");

  btnsTip.forEach((btn) => {
    btn.classList.remove("tip-active");
  });
});

customBtn.addEventListener("click", function () {
  btnsTip.forEach((btn) => {
    btn.classList.add("hidden");
  });

  customInput.classList.remove("hidden");
});
modeSwitch.addEventListener("click", function () {
  document.body.classList.toggle("darkmode-body");
  modeSwitch.textContent === "Switch to dark mode"
    ? (modeSwitch.textContent = "Switch to light mode")
    : (modeSwitch.textContent = "Switch to dark mode");
  document.querySelector("section").classList.toggle("darkmode-section");
  document.getElementById("sTip").classList.toggle("darkmode-sTip");
  document.getElementById("bll").classList.toggle("darkmode-h1");
  // document.querySelector(".btnTip").classList.toggle("darkmode-btnTip");
});
