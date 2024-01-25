import './style.css';
import { setupCounter } from './counter.ts';

const form = document.querySelector<HTMLFormElement>('#form');
const button = document.querySelector<HTMLButtonElement>('.btn');


form?.addEventListener('submit', (event: SubmitEvent) => {
   event.preventDefault();
   
});

// setupCounter(document.querySelector<HTMLButtonElement>('.btn')!);
