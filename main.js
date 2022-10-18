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
  const calculate = object.bill * (object.tip / 100);
  console.log(calculate);
}

function updateObject(event) {
  Object.assign(object, { [event.target.name]: event.target.value });
  isZero();
  console.log(object);
}

function updateAndGetResult() {
  updateObject(event);
  getResult();
  console.log("its working");
}
