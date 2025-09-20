const toggleBtn = document.querySelector('.theme-toggle');
const tabBtns = document.querySelectorAll('.portfolio__tab');
const tabContents = document.querySelectorAll('#portfolio__gallery, #portfolio__skills');
const scrollBtn = document.querySelector('.scroll-to-top__button');

toggleBtn.addEventListener('click', () => {
  // Check current theme
  const currentTheme = document.documentElement.getAttribute('data-theme');
  // Switch to the opposite
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
});

function animateProfileStats() {
  const counters = document.querySelectorAll('.profile__stat-num');
  const ANIM_DURATION = 2000;

  counters.forEach((counter) => {
    const targetNumber = parseInt(counter.textContent.trim(), 10);
    let startTime = null;

    function updateCount(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / ANIM_DURATION, 1);
      const currentCount = Math.floor(progress * targetNumber);

      counter.textContent = currentCount;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = targetNumber;
      }
    }

    requestAnimationFrame(updateCount);
  });
}

tabBtns.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove the active class from all buttons
    tabBtns.forEach((t) => t.classList.remove('portfolio__tab--active'));
    // Add the active class to the clicked button
    tab.classList.add('portfolio__tab--active');

    // Hide all content sections
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });

    const targetId = tab.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Display the target content if exists
    if (targetContent) {
      targetContent.style.display = 'flex';
    }
  });
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const getCurrentYear = () => {
  const yearContainer = document.querySelector('.footer__year');

  let currYear = new Date().getFullYear();
  return (yearContainer.innerText = currYear);
};

// Function calls
animateProfileStats();
getCurrentYear();
