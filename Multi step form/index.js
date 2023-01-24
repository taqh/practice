// ---------- START ---------- //
const nextBtn = document.querySelectorAll('.btn');
const backBtn = document.querySelectorAll('.back');
const steps = [...document.querySelectorAll('section')];
const tabs = [...document.querySelectorAll('.tab')]
const inputs = document.querySelectorAll('.login');
const form = document.querySelector('form');
const plans = document.querySelectorAll('.plan');

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
  console.log(inputs.length)

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
        currentIndex++;
        currentTabIndex++;
    } else {
        currentIndex--;
        currentTabIndex--;
    }
    currentSection = steps[currentIndex];
    currentTab = tabs[currentTabIndex];
    currentSection.removeAttribute('hidden');
    currentTab.setAttribute("aria-selected", true);
}
nextBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switchSection(true);
});
});

backBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switchSection(false);
});
});




// ---------- SELECT PLAN ---------- //
plans.forEach((plan) => {
  plan.addEventListener('click', (e) => {
    plan.setAttribute("data-clicked", true);
  });
});




