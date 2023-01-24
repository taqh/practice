// ---------- START ---------- //
const nextBtn = document.querySelector('.btn');
const backBtn = document.querySelector('.back');
const steps = [...document.querySelectorAll('section')];
const tabs = [...document.querySelectorAll('.tab')]
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

// ---------- ONLOAD SHOW CONTENT ---------- //
currentSection = steps[0];
currentTab = tabs[0];

window.addEventListener('DOMContentLoaded', () => {
    currentSection.removeAttribute('hidden');
    currentTab.setAttribute("aria-selected", true);
});

// ---------- FORM VALIDATION ---------- //

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  inputs.forEach((input) => {
    const validate = input.parentNode.querySelector('.invalid')
    
    if (!input.value) {
      validate.removeAttribute('hidden');
      input.classList.add('required');
    } else {
      validate.setAttribute('hidden','');
      input.classList.remove('required');
    }
  });
  form.reset();
});

// ---------- SWITCH SECTIONS ---------- //

function switchSection(isNext) {
    currentSection.setAttribute('hidden', true);
    currentTab.setAttribute("aria-selected", false);
    currentIndex = steps.indexOf(currentSection);
    currentTabIndex = tabs.indexOf(currentTab);

    if (isNext) {
        currentIndex = currentIndex + 1;
        currentTabIndex = currentTabIndex + 1;
    } else {
        currentIndex = currentIndex - 1;
        currentTabIndex = currentTabIndex - 1;
    }
    if(currentIndex === steps.length) {
        currentIndex = 0;
    }
    if(currentIndex < 0) {
        currentIndex = steps.length -1;
    }
    currentSection = steps[currentIndex];
    currentTab = tabs[currentTabIndex];
    currentSection.removeAttribute('hidden');
    currentTab.setAttribute("aria-selected", true);
}
nextBtn.addEventListener('click', (e) => {
    switchSection(true);
});

backBtn.addEventListener('click', (e) => {
    switchSection(false);
});






