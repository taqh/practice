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
picks.forEach((pick) => {
  // if user clics the div check the checkbox
    pick.addEventListener('click', (e) => {
        let checkbox = pick.querySelector('.checkbox');
        if (pick.getAttribute("data-checked").includes("true")) {
            pick.setAttribute("data-checked", false);
            checkbox.checked = false;
        } else {
            pick.setAttribute("data-checked", true);
            checkbox.checked = true;
        }
    });

    // if user cliks label add styling to div
    let label = pick.querySelector('label');
    label.addEventListener('click', (e) => {
        let checkbox = pick.querySelector('.checkbox');
        if (checkbox.checked) {
            pick.setAttribute("data-checked", false);
            checkbox.checked = false;
        } else {
            pick.setAttribute("data-checked", true);
            checkbox.checked = true;
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


// -------- get plan price and name ------ //
let plansList = [...document.querySelectorAll('.plan')]

// final page choice
let planChoice = '';

// for plans
let planPrices = [9, 12, 15]
let planPrice = 0;

// iterate through plans to check which is clicked //  
plansList.forEach((plan) => {
  plan.addEventListener('click', (e) => {
    plans.forEach((plan) => {
      if (plan.getAttribute("data-clicked").includes("true")){
          plan.setAttribute("data-clicked", false);
      }
  });
    plan.setAttribute("data-clicked", true);
    //grab title of plan (arcade, advanced, pro) //
    planChoice = e.target.firstElementChild.innerText; 

    // select plan price based on index of the plansList array //
    planPrice = planPrices[plansList.indexOf(plan)];

    // update reciept page based on plan clicked //
   document.querySelector('.plan-final').innerText = planChoice;
   document.querySelector('.price-final').innerText = planPrice;
   document.querySelector('.price-final-yr').innerText = planPrice + '0';
  });
});


// ----- Get add-on and price ----- //
let addonList = [...document.querySelectorAll('.pick')];
let checkboxes = [...document.querySelectorAll('.checkbox')];
let labels = [...document.querySelectorAll('.checkbox-title')];

// list to be displayed on the next page //
let addons = [...document.querySelectorAll('.add-on-sum')];

// i tried checking above (line 145) for clicks on the label and checkbox 
// as well as the div so that wherever is clicked the styling is appled 
// to the div hence why i also have to check for each of them below


// checks for click on the .pick div to show corresponding div index on the final page
addonList.forEach((addon) => {
  addon.addEventListener('click', (e) => {
    let clicked = e.target;
    let addonChoice = addonList.indexOf(clicked);
    if (addonChoice !== -1) {
      addons[addonChoice].classList.remove("hidden");
      // console.log(addonChoice);
    }
  });
});

//checks for click on the labels to show corresponding div index on the final page
labels.forEach((label) => {
  label.addEventListener('click', (e) => {
    let clicked = e.target;
    let addonChoice = labels.indexOf(clicked);
    if (addonChoice !== -1) {
      addons[addonChoice].classList.remove("hidden");
      // console.log(addonChoice);
    }
  });
});

//checks for click on the checkboxes to show corresponding div index on the final page
checkboxes.forEach((checkbox) => {
  // since a click on the div or label checks the checkbox 
  //im listening for a change event so when its unchecked 
  // it hides the corresponding div index
    checkbox.addEventListener('change', (e) => {
      let clicked = e.target;
      let addonChoice = checkboxes.indexOf(clicked);
      if (addonChoice !== -1) {
        if (clicked.checked) {
          addons[addonChoice].classList.remove("hidden");
        } else {
          addons[addonChoice].classList.add("hidden");
          // console.log(addonChoice);
        }
      }
    });
});

// display the total price of the users choices
document.getElementById("calc").addEventListener('click', (e) => {
  // set default //
  let one = 0;
  let two = 0;
  let three = 0;

  // iterate through the checkboxes array
  for (let i = 0; i < checkboxes.length; i++) {
    const box = checkboxes[i];
    // check the index of checked boxes and assign price 
    if(box.checked){
      if(i === 0){
        one = 1;
      }
      if(i === 1){
        two = 2;
      }
      if(i === 2){
        three = 2;
      }
    }
  }
  // sum the plan price and addon choices
  total = planPrice + one + two + three;
  document.querySelector('.sum-total').innerText = total;
});
