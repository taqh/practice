const form = document.querySelector<HTMLFormElement>('.rating-card__form');
const submitBtn = document.querySelector<HTMLButtonElement>('.btn');
const ratingCard = document.querySelector<HTMLDivElement>('.rating-card');
const thanksCard = document.querySelector<HTMLDivElement>('.thanks-card');
const rating = document.querySelector<HTMLParagraphElement>('.rating');
const ratingInputs = document.querySelectorAll<HTMLInputElement>('.rating-card__input');

const getRating = () => {
   let ratingValue: string = '0';
   ratingInputs.forEach((input) => {
      if (input.checked) {
         ratingValue = input.value;
      }
   });
   return ratingValue;
}

form?.addEventListener('submit', (event: SubmitEvent) => {
   event.preventDefault();
   
   ratingCard?.setAttribute('data-visible', 'false')
   thanksCard?.setAttribute('data-visible', 'true')

   rating ? rating.innerText = `You selected ${getRating()} out of 5` : 'You selected # out of 5';
});

