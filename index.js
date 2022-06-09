const bill = document.getElementById("bill");
const people = document.getElementById("people");
let tipAmounted = document.getElementById("tipAmount");
let total = document.getElementById("total");
const reset = document.getElementById("resetBtn");
const totalAmount = document.getElementById("totalAmount");
const customBtn = document.getElementById("row6");
const customInput = document.querySelector(".input-custom");
const cInput = document.getElementById("customInput");

let isFalse = true;
reset.disabled = isFalse;

reset.addEventListener("click", function () {
  bill.value = "";
  people.value = "";
  totalAmount.textContent = "0.00";
  total.textContent = "0.00";
  tipAmounted.textContent = "0.00";

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
