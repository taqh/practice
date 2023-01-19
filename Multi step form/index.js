
// FORM VALIDATION
let form = document.querySelector('form');
let input = document.querySelector('input')


form.addEventListener('submit', (e) =>  {
    e.preventDefault();
    let validate = document.querySelector('.invalid')
    if (input.value ==='' ) {
        validate.removeAttribute('hidden')
        input.className = 'required';
    }
});