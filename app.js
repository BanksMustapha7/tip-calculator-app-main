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

    //gets the tip amount by multiplying tip percent by the bill
    tipAmount = ((tipPercent / 100) * billValue).toFixed(2);
    tipAmounted.textContent = tipAmount;

    //gets total amount by adding tip amount to bill
    totalAmountValue = (Number(tipAmount) + billValue).toFixed(2);
    totalAmount.textContent = totalAmountValue.toLocaleString();

    //calculates the total by multiplying total amount by number of people
    totalValue = (totalAmountValue * peopleValue).toFixed(2);
    total.textContent = Number(totalValue).toLocaleString();

    // enables the reset button
    isFalse = false;
    reset.disabled = isFalse;
  }
  // if values have not been assigned
  else {
    // if values have not been assigned it disables the reset button
    isFalse = true;
  }
};

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

cInput.addEventListener("input", function (e) {
  tipPercent = e.target.value;
  cInput.value = "";
});
cInput.addEventListener("input", getTip);
