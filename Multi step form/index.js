// ---------- START ---------- //
const nextBtn = document.querySelectorAll('.btn');
const backBtn = document.querySelectorAll('.back');
const steps = [...document.querySelectorAll('section')];
const tabs = [...document.querySelectorAll('.tab')]
const inputs = document.querySelectorAll('.login');
const displayError = document.querySelectorAll('.invalid');
const form = document.querySelector('form');
const plans = document.querySelectorAll('.plan');
const toggle =  document.querySelector('.swap');
const picks = document.querySelectorAll('.pick');


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
  
  inputs.forEach((input, index) => {
    if (!input.value) {
      input.classList.add('required');
      displayError[index].removeAttribute('hidden');
    } else {
      input.classList.remove('required');
      displayError[index].setAttribute('hidden','');
    }
  });
});

 // ON KEYDOWN CLEAR ERROR MESSAGES //
 inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if(e.target.value){
      input.classList.remove('required');
      displayError[index].setAttribute('hidden','');
    }
  });
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
    e.preventDefault();

    // CHECK IF EMPTY FORM FIELDS //
    let isValid = true;
    inputs.forEach((input,index) => {
      // if empty display error messages 
      if (!input.value) {
        isValid = false;
        input.classList.add('required');
        displayError[index].removeAttribute('hidden');
      }
    });
    // else switch to next section
    if(isValid) switchSection(true);
    
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
    plans.forEach((plan) => {
        if (plan.getAttribute("data-clicked").includes("true")){
            plan.setAttribute("data-clicked", false);
        }
    });
    plan.setAttribute("data-clicked", true);
  });
});

// ONCLICK CHANGE PLAN STATE //
toggle.addEventListener('click', (e) => {  

    monthly = document.querySelector('.option1');
    yearly = document.querySelector('.option2');

    yearPrice = document.querySelectorAll('.yr');
    monthPrice = document.querySelectorAll('.mo');

    if (monthly.getAttribute("data-selected").includes("true")) {
      yearly.setAttribute("data-selected", true);
      monthly.setAttribute("data-selected", false);
      
    } else {
      monthly.setAttribute("data-selected", true);
      yearly.setAttribute("data-selected", false);
      
    }

    if (yearly.getAttribute("data-selected").includes("true")) {
        yearPrice.forEach((yr) => {
          yr.removeAttribute('hidden');
        });
        monthPrice.forEach((mo) => {
          mo.setAttribute('hidden','');
        });
    } else {
        monthPrice.forEach((mo) => {
          mo.removeAttribute('hidden');
        });
        yearPrice.forEach((yr) => {
          yr.setAttribute('hidden','');
        });
    }

});
  
  // ---------- SELECT ADD ON ---------- //
  picks.forEach((pick) =>  {
    pick.addEventListener('click', (e) => {
      if (pick.getAttribute("data-checked").includes("true")){
        pick.setAttribute("data-checked", false);
      } else {
        pick.setAttribute("data-checked", true);
      }
    });
  });

  // SUMMARY SECTION LINK  //
  function changePlan(isTrue) {
    currentSection.setAttribute('hidden', true);
    currentTab.setAttribute("aria-selected", false);
    currentIndex = steps.indexOf(currentSection);
    currentTabIndex = tabs.indexOf(currentTab);

    if(isTrue) {
      currentIndex = currentIndex - 2; //back two sections
      currentTabIndex = currentTabIndex - 2; //back two tabs
    }
    currentSection = steps[currentIndex];
    currentTab = tabs[currentTabIndex];
    currentSection.removeAttribute('hidden');
    currentTab.setAttribute("aria-selected", true);
  }

let back = document.getElementById('back-link')
 back.addEventListener('click', (e) => {
  changePlan(true);
 });

  