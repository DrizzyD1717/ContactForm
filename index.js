const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const query = document.getElementById("general");
const message = document.getElementById("message");
const form = document.getElementById("form");
const consent = document.getElementById("consent");
const termsAndConditions = document.querySelector("#consent");
const generalRadio = document.querySelector("#general");
const supportRadio = document.querySelector("#support");
const formSubmitted = document.querySelector(".formsubmitted");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  let inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  element.classList.add("failure");
};

const setSuccess = (element) => {
  element.classList.add("success");
  element.classList.remove("failure");
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const queryValue = query.value.trim();
  const messageValue = message.value.trim();
  const consentValue = consent.value;

  if (firstNameValue == "") {
    setError(firstName, "This field is required");
  } else {
    setError(firstName, "");
    setSuccess(firstName);
  }

  if (lastNameValue == "") {
    setError(lastName, "This field is required");
  } else {
    setError(lastName, "");
    setSuccess(lastName);
  }

  if (emailValue == "") {
    setError(email, "Please enter a valid email address");
  } else {
    setError(email, "");
    setSuccess(email);
  }

  if (messageValue == "") {
    setError(message, "This field is required");
  } else {
    setError(message, "");
    setSuccess(message);
  }

  if (consentValue == "") {
    setError(consent, "This field is required");
  }

  if (!termsAndConditions.checked) {
    setError(consent, "To submitt this form please consent to being contacted");
  } else {
    setError(consent, "");
  }

  if (!generalRadio.checked && !supportRadio.checked) {
    setError(generalRadio.parentElement, "Please select a query type");
  } else if (generalRadio.checked || supportRadio.checked) {
    setError(generalRadio.parentElement, "");
    setSuccess(generalRadio);
    setSuccess(supportRadio);
    generalRadio.parentElement.classList.remove("failure");
  }

  if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    messageValue &&
    consentValue &&
    termsAndConditions.checked
  ) {
    formSubmitted.style.display = "block";
  } else {
    formSubmitted.style.display = "none";
  }
};
