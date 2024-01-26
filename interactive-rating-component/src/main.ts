import './style.css';
import { setupCounter } from './counter.ts';

const form = document.querySelector<HTMLFormElement>('#form');
const button = document.querySelector<HTMLButtonElement>('.btn');
const card = document.querySelector<HTMLDivElement>('.card');

form?.addEventListener('submit', (event: SubmitEvent) => {
   event.preventDefault();
   
   card?.setAttribute('hidden', 'true')
});

// setupCounter(document.querySelector<HTMLButtonElement>('.btn')!);
