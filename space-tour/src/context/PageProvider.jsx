import { useState } from 'react';
import PageContext from './PageContext';

function PageProvider({children}) {
	const [activePage, setActivePage] = useState('home');

	const switchPage = (path) => {
		setActivePage(path)
	};

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
