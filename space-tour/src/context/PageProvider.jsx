import PageContext from './PageContext';

function PageProvider({children}) {
	const activePage = 'home';

	const switchPage = (path) => {
		console.log(path);
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
