let billValue, peopleValue, tipPercent;
const btnsTip = document.querySelectorAll(".btn-tip");

btnsTip.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnsTip.forEach((btn) => btn.classList.remove("tip-active"));

    // btn.classList.add("tip-active"); (also working)
    e.currentTarget.classList.add("tip-active");
    tipPercent = btn.value;
    console.log(tipPercent);
  });
});

bill.addEventListener("input", function (e) {
  billValue = e.target.value;
  console.log(billValue);
});
people.addEventListener("input", function (e) {
  peopleValue = e.target.value;
  console.log(peopleValue);
});

const getTip = () => {};
const calcTotals = () => {};

function calculate() {
  reset.disabled = false;
  if ((billValue, peopleValue, tipPercent)) {
    tip = (tipPercent / 100) * billValue;
    console.log(tip);
  }
}

bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);


//to local string for comma
