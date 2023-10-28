import { useEffect, useState } from 'react';
import { Sun, Moon } from '../Icons';

const ThemeSwitch = () => {
   const [darkMode, setDarkMode] = useState(false);
   const userTheme = localStorage.getItem('theme');
   const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
   ).matches;

   useEffect(() => {
      if ((userTheme && userTheme === 'dark') || (!userTheme && systemTheme))
         setDarkMode(true);
      else setDarkMode(false);
   }, []);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('theme', 'light');
      }
   }, [darkMode]);

   return (
      <button
         className='flex w-fit items-center gap-3.5 ml-auto fill-DarkBg dark:fill-White border-none focus-within:outline-DarkBlue dark:focus-within:outline-White text-DarkBg dark:text-White transition duration-300'
         onClick={() => setDarkMode(!darkMode)}
      >
         <span className='sr-only'>Change Theme</span>
         <span className='flex gap-2.5 max-sm:text-sm font-medium items-center'>
            <span className={`transition duration-300 ${darkMode && 'rotate-[360deg]'}`}>
               {!darkMode ? <Sun aria-hidden='true' /> : <Moon aria-hidden='true' />}
            </span>
            <span>
               {darkMode ? 'Dark' : 'Light'} Mode
            </span>
         </span>
      </button>
   );
};

export default ThemeSwitch;
