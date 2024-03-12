const form = document.querySelector<HTMLFormElement>('.rating-card__form');
const change = document.querySelector<HTMLButtonElement>('.change');
const ratingCard = document.querySelector<HTMLDivElement>('.rating-card');
const thanksCard = document.querySelector<HTMLDivElement>('.thanks-card');
const rating = document.querySelector<HTMLParagraphElement>('.rating');
const ratingInputs = document.querySelectorAll<HTMLInputElement>('.rating-card__input');
const card = document.querySelector<HTMLDivElement>('.card');

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
   
   // add the class that rotates the card
   card?.classList.add('rotate');

   // make the thanks card visible
   thanksCard?.setAttribute('data-visible', 'true')

   // add a little delay before removing the rating card
   setTimeout(() => {
      ratingCard?.setAttribute('data-visible', 'false')
   }, 1000);

   rating ? rating.innerText = `You selected ${getRating()} out of 5` : 'You selected # out of 5';
});


change?.addEventListener('click', () => {

   // add the class that rotates the card
   card?.classList.remove('rotate');

   // make rating card visible
   ratingCard?.setAttribute('data-visible', 'true')

   // add a little delay before removing the thanks card
   setTimeout(() => {
      thanksCard?.setAttribute('data-visible', 'false')
   }, 1000);
})

