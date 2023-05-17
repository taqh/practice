import './styles/main.scss';
// const loader = document.querySelector('.loader');
const quoteId = document.querySelector('.advice__id');
const quote = document.querySelector('.advice__quote');
const fetchBtn = document.querySelector('.advice__btn');
const dice = document.querySelector('.dice')
// Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.
async function getAdvice() {
	try {
		const response = await fetch('https://api.adviceslip.com/advice');
		const adviceSlip = await response.json();

		if (!response.ok) {
			throw new Error(`Something went wrong`);
		}

		const adviceId = adviceSlip.slip.id;
		const advice = adviceSlip.slip.advice;

		setTimeout(() => {
			quote.classList.add('fade');
			quoteId.classList.add('slide');
			quote.innerText = `“${advice}”`;
			quoteId.innerText = `advice #${adviceId}`;
			dice.removeAttribute('data-loading');
		}, 2000);

	} catch (error) {
		quoteId.innerText = `oops`;
		quote.innerText = `Something went wrong, please try again later`;
		dice.removeAttribute('data-loading');
	}
	setTimeout(() => {
		quote.classList.remove('fade');
		quoteId.classList.remove('slide');
	}, 800);
}

fetchBtn.addEventListener('click', () => {
	getAdvice();
	// loader.removeAttribute('hidden');
	dice.setAttribute('data-loading', 'true');
});
