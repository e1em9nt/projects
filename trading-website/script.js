"use strict";

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

const buttons = document.querySelectorAll(".btn");

const inputName = document.querySelector(".user-name");
const inputEmail = document.querySelector(".user-email");
const inputMsg = document.querySelector(".user-message");

const formBtn = document.querySelector(".form-btn");
const error = document.querySelector(".email-error");

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// HAMBURGER MENU
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  hamburger.classList.toggle("active");
});

// BUTTON
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("visited");
  });
});

// DOTS
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо посилання на елементи
  const step1 = document.querySelector(".step-1");
  const step2 = document.querySelector(".step-2");
  const step3 = document.querySelector(".step-3");
  const step4 = document.querySelector(".step-4");
  let line1, line2, line3;
  function createLines() {
    // Створюємо лінії тільки якщо їх ще немає
    if (!line1) {
      line1 = new LeaderLine(step1, step2, {
        endSocket: "top",
        path: "grid",
        dash: { animation: false },
        color: "#6248FF",
        startSocketGravity: [109, 0],
        size: 2,
        startPlug: "behind",
        endPlug: "behind",
      });
    }
    if (!line2) {
      line2 = new LeaderLine(step2, step3, {
        endSocket: "top",
        path: "grid",
        dash: { animation: false },
        color: "#6248FF",
        size: 2,
        startPlug: "behind",
        endPlug: "behind",
      });
    }
    if (!line3) {
      line3 = new LeaderLine(step3, step4, {
        startSocket: "right",
        endSocket: "top",
        path: "grid",
        dash: { animation: false },
        color: "#6248FF",
        size: 2,
        socketGravity: 100,
        startPlug: "behind",
        endPlug: "behind",
      });
    }
  }
  function removeLines() {
    if (line1) {
      line1.remove();
      line1 = null;
    }
    if (line2) {
      line2.remove();
      line2 = null;
    }
    if (line3) {
      line3.remove();
      line3 = null;
    }
  }
  function updateLines() {
    if (window.innerWidth < 576) {
      removeLines(); // Видаляємо лінії
    } else {
      createLines(); // Відновлюємо лінії
    }
  }
  // Перевіряємо при завантаженні сторінки
  updateLines();
  // Слідкуємо за зміною розміру екрану
  window.addEventListener("resize", updateLines);
});

// INPUT FORM
const messages = [];

const createNewMessage = (name, email, msg) => {
  let message = {
    name,
    email,
    msg,
  };
  messages.push(message);
};

// VALIDATION
// Кольори, які будемо використовувати
const COLOR_DEFAULT = "#E0E0E0"; // світло-сірий (початковий)
const COLOR_FOCUS = "#4F4F4F"; // темно-сірий (фокус)
const COLOR_VALID = "#0EAC00"; // зелений
const COLOR_INVALID = "#EB5757"; // червоний

// Функції валідації
function checkField(field) {
  const value = field.value.trim();
  return value.length > 0;
}

// Перевірка поля email (відповідає pattern + не порожнє)
function checkEmail(emailField) {
  const value = emailField.value.trim();

  if (!value || !emailField.checkValidity()) {
    return false;
  }
  return true;
}

// Функція для швидкої зміни кольору рамок
function setBorderColor(field, color) {
  field.style.borderColor = color;
}

// Функції показати або сховати помилку під email
function showEmailError() {
  error.classList.remove("hidden");
  inputEmail.style.marginBottom = "0";
}
function hideEmailError() {
  error.classList.add("hidden");
  inputEmail.style.marginBottom = "1.5rem";
}

// Логіка при натисканні кнопки "Send"
formBtn.addEventListener("click", function () {
  // Зчитуємо значення з полів
  const username = inputName.value.trim();
  const email = inputEmail.value.trim();
  const msg = inputMsg.value.trim();

  let isError = false;

  // Перевірка ім'я
  if (checkField(inputName)) {
    setBorderColor(inputName, COLOR_VALID);
  } else {
    setBorderColor(inputName, COLOR_INVALID);
    isError = true;
  }

  // Перевірка повідомлення
  if (checkField(inputMsg)) {
    setBorderColor(inputMsg, COLOR_VALID);
  } else {
    setBorderColor(inputMsg, COLOR_INVALID);
    isError = true;
  }

  // Перевірка email
  if (checkEmail(inputEmail)) {
    setBorderColor(inputEmail, COLOR_VALID);
    hideEmailError();
  } else {
    setBorderColor(inputEmail, COLOR_INVALID);
    showEmailError();
    isError = true;
  }

  // Якщо немає помилок - надсилаємо повідомлення
  if (!isError) {
    createNewMessage(username, email, msg);
    console.log(messages);
    alert("Message sent!");

    // Очищуємо поля
    inputName.value = "";
    inputEmail.value = "";
    inputMsg.value = "";

    // Повертаємо дефолтний колір
    setBorderColor(inputName, COLOR_DEFAULT);
    setBorderColor(inputEmail, COLOR_DEFAULT);
    setBorderColor(inputMsg, COLOR_DEFAULT);

    // Ховаємо текст про помилку у email (якщо був)
    hideEmailError();
  }
});

// Додаткові обробники подій focus / input / blur
function handleFocus(e) {
  setBorderColor(e.target, COLOR_FOCUS);
}

function handleInput(e) {
  const field = e.target;

  if (field === inputEmail) {
    // Перевірка email
    if (checkEmail(inputEmail)) {
      setBorderColor(inputEmail, COLOR_VALID);
      hideEmailError();
    } else {
      setBorderColor(inputEmail, COLOR_INVALID);
      showEmailError();
    }
  } else {
    // Перевірка звичайного поля
    if (checkField(field)) {
      setBorderColor(field, COLOR_VALID);
    } else {
      setBorderColor(field, COLOR_INVALID);
    }
  }
}

function handleBlur(e) {
  const field = e.target;
  const value = field.value.trim();

  if (!value) {
    setBorderColor(field, COLOR_DEFAULT);

    // Для email — сховати повідомлення, якщо воно порожнє
    if (field === inputEmail) {
      hideEmailError();
    }
  }
}

// Обробники focus / input / blur на всі 3 поля
[inputName, inputEmail, inputMsg].forEach((field) => {
  field.addEventListener("focus", handleFocus);
  field.addEventListener("input", handleInput);
  field.addEventListener("blur", handleBlur);
});

// SLIDER
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    // Показуємо лише той, що співпадає з index
    slide.classList.toggle("active", i === index);

    const slideIndexEl = slide.querySelector(".slide-index");

    if (slideIndexEl) {
      slideIndexEl.textContent = `${i + 1} / ${slides.length}`;
    }
  });
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Показуємо початковий слайд
showSlide(currentSlide);

// CURRENT YEAR
const getCurrentYear = () => {
  const container = document.querySelector(".year");

  let year = new Date().getFullYear();
  return (container.innerText = year);
};

getCurrentYear();
