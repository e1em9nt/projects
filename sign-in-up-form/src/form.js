"use strict";

// Constants
const MIN_PASSWORD_LENGTH = 8;
const HIGHLIGHT_COLORS = {
  ERROR: "#d7415e",
  WARNING: "#ffda5f",
  SUCCESS: "#84bc9c",
  NONE: "none",
};

// DOM Elements
const signupForm = document.getElementById("signup");
const usernameInput = signupForm.querySelector("#input-username");
const emailInput = signupForm.querySelector("#input-email");
const passwordInput = signupForm.querySelector("#input-pswd");
const confirmPasswordInput = signupForm.querySelector("#pswd-confirm");

const emailErrorMessage = signupForm.querySelector(
  ".signup-form__error--email"
);
const confirmErrorMessage = signupForm.querySelector(
  ".signup-form__error--confirm"
);

const strengthContainer = signupForm.querySelector(
  ".signup-form__pswd-strength"
);
const strengthItems = Array.from(
  signupForm.querySelectorAll(".signup-form__pswd-strength--contain")
);

let registeredAccounts = [];

// Helper Functions
const setOutline = (el, color) => {
  if (color === HIGHLIGHT_COLORS.NONE) {
    el.style.outline = "";
  } else {
    el.style.outline = `2px solid ${color}`;
  }
};
const showElement = (el) => el.classList.remove("hidden");
const hideElement = (el) => el.classList.add("hidden");
const resetStrengthDisplay = () => {
  strengthItems.forEach((item) => (item.style.color = ""));
  setOutline(passwordInput, HIGHLIGHT_COLORS.NONE);
};
const changeStrengthColors = (color) => {
  strengthItems.forEach((item) => (item.style.color = color));
  setOutline(passwordInput, color);
};

// Password Strength Evaluation
function evaluatePasswordStrength() {
  const pwd = passwordInput.value;

  if (pwd.length === 0) {
    hideElement(strengthContainer);
    resetStrengthDisplay();
    return;
  }

  showElement(strengthContainer);

  const isLetters = /^[a-zA-Z]+$/.test(pwd);
  const isNumbers = /^\d+$/.test(pwd);
  const isSymbols = /^[^a-zA-Z0-9]+$/.test(pwd);

  const isLettersAndNumbers = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(pwd);
  const isNumbersAndSymbols = /^(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/.test(pwd);
  const isLettersAndSymbols = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/.test(pwd);

  const isAll = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/.test(pwd);

  if (pwd.length < MIN_PASSWORD_LENGTH) {
    changeStrengthColors(HIGHLIGHT_COLORS.ERROR);
    return;
  }
  if (isAll) {
    changeStrengthColors(HIGHLIGHT_COLORS.SUCCESS);
  } else if (isLetters || isNumbers || isSymbols) {
    // Only one category — show first item in error color, others default
    strengthItems[0].style.color = HIGHLIGHT_COLORS.ERROR;
    strengthItems.slice(1).forEach((item) => {
      item.style.color = "";
    });
    setOutline(passwordInput, HIGHLIGHT_COLORS.ERROR);
  } else if (
    isLettersAndNumbers ||
    isNumbersAndSymbols ||
    isLettersAndSymbols
  ) {
    // Two categories — first two items warning color, last default
    strengthItems[0].style.color = HIGHLIGHT_COLORS.WARNING;
    strengthItems[1].style.color = HIGHLIGHT_COLORS.WARNING;
    strengthItems[2].style.color = "";
    setOutline(passwordInput, HIGHLIGHT_COLORS.WARNING);
  } else {
    resetStrengthDisplay();
  }
}

function validateEmail() {
  if (emailInput.checkValidity()) {
    hideElement(emailErrorMessage);
    setOutline(emailInput, HIGHLIGHT_COLORS.SUCCESS);
  } else {
    showElement(emailErrorMessage);
    setOutline(emailInput, HIGHLIGHT_COLORS.ERROR);
  }
}

function validateUsername() {
  if (usernameInput.checkValidity()) {
    setOutline(usernameInput, HIGHLIGHT_COLORS.SUCCESS);
  } else {
    setOutline(usernameInput, HIGHLIGHT_COLORS.ERROR);
  }
}

// Event Listeners
passwordInput.addEventListener("input", evaluatePasswordStrength);
passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length === 0 || passwordInput.checkValidity()) {
    hideElement(strengthContainer);
    resetStrengthDisplay();

    if (passwordInput.checkValidity()) {
      setOutline(passwordInput, HIGHLIGHT_COLORS.SUCCESS);
    }
  }
});

emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", () => {
  if (emailInput.value.length === 0) {
    hideElement(emailErrorMessage);
    setOutline(emailInput, HIGHLIGHT_COLORS.NONE);
  }
});

usernameInput.addEventListener("input", validateUsername);
usernameInput.addEventListener("blur", () => {
  if (usernameInput.value.length === 0) {
    setOutline(usernameInput, HIGHLIGHT_COLORS.NONE);
  }
});

// Form Submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const pswd = passwordInput.value;
  const confirmPswd = confirmPasswordInput.value;

  // 1) Check if all required fields are filled
  if (username && email && pswd) {
    if (pswd.length < MIN_PASSWORD_LENGTH) {
      passwordInput.reportValidity();
      return;
    }
    // 2) Check if passwords match
    if (pswd === confirmPswd) {
      const isUserExists = registeredAccounts.some(
        (account) => account.username === username || account.email === email
      );
      if (!isUserExists) {
        registeredAccounts.push({ username, email, password: pswd });
        alert("Registration successful!");

        signupForm.reset();
        resetStrengthDisplay();
        hideElement(strengthContainer);
        hideElement(confirmErrorMessage);
        setOutline(usernameInput, HIGHLIGHT_COLORS.NONE);
        setOutline(emailInput, HIGHLIGHT_COLORS.NONE);
        setOutline(passwordInput, HIGHLIGHT_COLORS.NONE);
        setOutline(confirmPasswordInput, HIGHLIGHT_COLORS.NONE);
      } else alert("A user with that username or email already exists.");
    } else {
      confirmErrorMessage.textContent = ` ${username}, Your passwords do not match!`;
      showElement(confirmErrorMessage);
    }
  } else alert("Please fill in all required fields.");
});
