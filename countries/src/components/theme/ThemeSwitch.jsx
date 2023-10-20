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
      <label
         className={`fill-DarkBg dark:fill-White transition duration-300 ease-in-out text-GrayBlue dark:text-PaleBlue relative flex w-fit items-center gap-[15px] hover:text-ModerateBlue dark:hover:text-SoftBlue ml-auto`}
         htmlFor='toggle'
      >
         <input
            id='toggle'
            name='toggle'
            type='checkbox'
            className='border-none dark:focus-within:outline-SoftBlue focus-within:outline-ModerateBlue absolute top-0 left-0 z-10 h-full w-full cursor-pointer appearance-none'
            checked={darkMode}
            role='switch'
            aria-checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
         />
         <span className='sr-only'>Change Theme</span>
         <span className={`transition duration-300 ${darkMode && 'rotate-[360deg]'}`}>
            {!darkMode ? <Sun aria-hidden='true' /> : <Moon aria-hidden='true' />}
         </span>
      </label>
   );
};

export default ThemeSwitch;
