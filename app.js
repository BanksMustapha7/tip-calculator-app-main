let billValue, peopleValue, tipAmount;
const btnsTip = document.querySelectorAll(".btn-tip");

bill.addEventListener("input", function (e) {
  billValue = e.target.value;
  console.log(billValue);
});
people.addEventListener("input", function (e) {
  peopleValue = e.target.value;
  console.log(peopleValue);
});

const getTip = () => {
  if (billValue && tipPercent) {
    console.log("All values present");
    tipAmount = ((tipPercent / 100) * billValue).toFixed(2);
    console.log(tipAmount);
    reset.disabled = false;
    tipAmounted.textContent = tipAmount;
  } else console.log("Values are missing");
};
const calcTotals = () => {};

bill.addEventListener("input", getTip);
people.addEventListener("input", getTip);

btnsTip.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnsTip.forEach((btn) => {
      btn.classList.remove("tip-active");
      // btn.addEventListener("input", getTip);
    });

    // btn.classList.add("tip-active"); (also working)
    e.currentTarget.classList.add("tip-active");
    tipPercent = btn.value;
    console.log(tipPercent);
  });
  btn.addEventListener("click", getTip);
});

//to local string for comma
