const form = document.querySelector<HTMLFormElement>('.rating-card__form');
const changeRating = document.querySelector<HTMLButtonElement>('.change');
const ratingCard = document.querySelector<HTMLDivElement>('.rating-card');
const thanksCard = document.querySelector<HTMLDivElement>('.thanks-card');
const rating = document.querySelector<HTMLParagraphElement>('.rating');
const ratingInputs = document.querySelectorAll<HTMLInputElement>(  '.rating-card__input');
const card = document.querySelector<HTMLDivElement>('.card');
let timeoutId: number;

const getRating = () => {
  let ratingValue: string = '0';
  ratingInputs.forEach((input) => {
    if (input.checked) {
      ratingValue = input.value;
    }
  });
  return ratingValue;
};

form?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();

  // add the class that rotates the card
  card?.classList.add('rotate');

  // make the thanks card visible
  thanksCard?.setAttribute('data-visible', 'true');

  // Clear any existing timeout before setting a new one to avoid setting multiple timeouts and hiding both cards
  clearTimeout(timeoutId);

  // add a little delay before removing the rating card
  timeoutId = setTimeout(() => {
    ratingCard?.setAttribute('data-visible', 'false');
  }, 600);

  rating
    ? (rating.innerText = `You selected ${getRating()} out of 5`)
    : 'You selected # out of 5';
});

changeRating?.addEventListener('click', () => {
  // remove the class that rotates the card
  card?.classList.remove('rotate');

  // make rating card visible
  ratingCard?.setAttribute('data-visible', 'true');

  // Clear any existing timeout before setting a new one to avoid setting multiple timeouts and hiding both cards
  clearTimeout(timeoutId);

  // add a little delay before removing the thanks card
  timeoutId = setTimeout(() => {
    thanksCard?.setAttribute('data-visible', 'false');
  }, 600);
});
