import { useEffect, useState } from 'react';
import PageContext from './PageContext';

function PageProvider({ children }) {
	const [activePage, setActivePage] = useState(localStorage.getItem('ACTIVE_PAGE') ||'home');

	const switchPage = (path) => {
		setActivePage(path);
	};

	// on refresh the root wrapper classname goes back to the default 'home'
	// and this breaks the background images setting the home background regardless
	//of your current page so im using local storage to set the last known background 
	
	useEffect(() => {
		localStorage.setItem('ACTIVE_PAGE', activePage);
	}, [activePage]);

	const pageContext = {
		activePage: activePage,
		switchActivePage: switchPage,
	};

	return (
		<PageContext.Provider value={pageContext}>
			{children}
		</PageContext.Provider>
	);
}

export default PageProvider;
