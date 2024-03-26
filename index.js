let btnReset = document.getElementById("resetHandler");
let btnEnter = document.getElementById("enterHandler");
let firstName = document.getElementById("first");
let middleName = document.getElementById("middle");
let lastName = document.getElementById("last");
let age = document.getElementById("age");
let valueAge = document.getElementById("displayAge");

// second container value from container one

let firstNameOut = document.getElementById("firstOut");
let middleNameOut = document.getElementById("middleOut");
let lastNameOut = document.getElementById("lastOut");
let ageOut = document.getElementById("ageOut");

let display = document.getElementById("display");

// reset button
btnReset.addEventListener("click", () => {
  // inputs
  firstName.value.trim = "";
  middleName.value.trim = "";
  lastName.value.trim = "";
  age.value.trim = "";

  // outputs
  firstNameOut.value = "";
  middleNameOut.value = "";
  lastNameOut.value = "";
  ageOut.value = "";

  // output
  valueAge.textContent = "";
});

btnEnter.addEventListener("click", () => {
  let firstNameInput = firstName.value;
  firstNameOut.value = firstNameInput;

  let middleNameInput = middleName.value;
  middleNameOut.value = middleNameInput;

  let lastNameInput = lastName.value;
  lastNameOut.value = lastNameInput;

  let ageInput = age.value;
  ageOut.value = ageInput;

  if (age.value < 18) {
    valueAge.textContent = `You're a minor ${age.value}`;
    valueAge.classList.add("style");
  }

  if (age.value >= 18) {
    valueAge.textContent = `You're an adult ${age.value}`;
    valueAge.classList.add("style");
  }

  if (age.value === "") {
    Number(valueAge.textContent) = `Invalid age${age.value}`;
    valueAge.classList.add("style");
  }
});
