import { useEffect, useState } from 'react';

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
			className={`transition duration-300 ease-in-out text-GrayBlue dark:text-PaleBlue relative flex w-full items-center gap-[15px] hover:text-ModerateBlue dark:hover:text-SoftBlue justify-end`}
		>
			<input
				type='checkbox'
				className='border-none dark:focus-within:outline-SoftBlue focus-within:outline-ModerateBlue absolute top-0 left-0 z-10 h-full w-full cursor-pointer appearance-none'
				checked={darkMode}
				role='switch'
				aria-checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<span className='switch rounded-2xl' aria-hidden='true'></span>
		</label>
	);
};

export default ThemeSwitch;
