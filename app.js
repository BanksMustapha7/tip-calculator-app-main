let billValue, peopleValue, tipAmount, totalAmountValue, totalValue;
const btnsTip = document.querySelectorAll(".btn-tip");

bill.addEventListener("input", function (e) {
  //gets the value of the bill input and converts it to number
  billValue = Number(e.target.value);
  console.log(billValue);
});
people.addEventListener("input", function (e) {
  // gets the value of the people input and converts it to number
  peopleValue = Number(e.target.value);
  console.log(peopleValue);
});

const getTip = () => {
  //if billValue and tip percent have been assigned values code below should take place
  if (billValue && tipPercent && peopleValue) {
    console.log("All values present");
    tipAmount = ((tipPercent / 100) * billValue).toFixed(2);
    console.log(tipAmount);
    tipAmounted.textContent = tipAmount;
    totalAmountValue = Number(tipAmount) + billValue;

    totalAmount.textContent = totalAmountValue.toFixed(2);
    totalValue = totalAmountValue * peopleValue;
    total.textContent = totalValue.toFixed(2);
  }
  // if values have not been assigned
  else console.log("Values are missing");
};
const calcTotalAmout = () => {};

//adds the event listeners to bill and people input, calls upon the function on every input
bill.addEventListener("input", getTip);
people.addEventListener("input", getTip);

//adds event lister and class to any button clicked that has the classname for btn-tip.
btnsTip.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnsTip.forEach((btn) => {
      btn.classList.remove("tip-active");
    });

    // btn.classList.add("tip-active"); (also working)
    e.currentTarget.classList.add("tip-active");
    tipPercent = btn.value;
    console.log(tipPercent);
  });
  btn.addEventListener("click", getTip);
});
