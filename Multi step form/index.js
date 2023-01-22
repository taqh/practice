// ----- Form Validation ----- //

const form = document.querySelector('form');
const input = document.querySelector('input')

console.log(form);
form.addEventListener('submit', (e) =>  {
    e.preventDefault();

    let validate = document.querySelector('.invalid')
    if (input.value ==='' ) {
        validate.removeAttribute('hidden')
        input.classList.add('required');
    } else {
        validate.setAttribute('hidden','')
        input.classList.remove('required');
    }
 });



// const inputs = document.querySelectorAll('input');
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   inputs.forEach((input) => {
//     const validate = input.parentNode.querySelector('.invalid')
    
//     if (!input.value) {
//       validate.removeAttribute('hidden');
//       input.classList.add('required');
//     } else {
//       validate.setAttribute('hidden','');
//       input.classList.remove('required');
//     }
//   });
// });

form.reset();


// ----- Switch sections ----- //
// const next = document.querySelector('.btn')
// const plans = document.getElementById('plans')
// const info = document.getElementById('info')

// Btn.addEventListener('click', (e) => {
  
//   let input = document.querySelector('.login');
//   if(input.value) {
//     info.setAttribute('hidden','');
//     plans.removeAttribute('hidden');
//   }
// })