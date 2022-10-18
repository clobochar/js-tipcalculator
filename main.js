const object = {
  bill: "",
  tip: "",
  people: "",
};

function isZero() {
  const billInput = document.querySelector(".bill-input");
  const peopleInput = document.querySelector(".people-input");

  if (object.bill == 0) {
    billInput.classList.add("error");
  } else {
    billInput.classList.remove("error");
  }

  if (object.people == 0) {
    peopleInput.classList.add("error");
  } else {
    peopleInput.classList.remove("error");
  }
}

function getResult() {
  const calculateTotalTip = object.bill * (object.tip / 100);
  const tipPerPerson = calculateTotalTip / object.people;
  const totalAmount = tipPerPerson + object.bill / object.people;

  const tipAmount = document.querySelector(".result-tipAmount");
  tipAmount.innerHTML = `<h3>$${tipPerPerson.toFixed(2)}</h3>`;

  const resultTotalAmount = document.querySelector(".result-totalAmount");
  resultTotalAmount.innerHTML = `<h3>$${totalAmount.toFixed(2)}</h3>`;
}

function updateObject(event) {
  Object.assign(object, { [event.target.name]: event.target.value });
  isZero();
}

function updateAndGetResult() {
  updateObject(event);
  getResult();
}
