import { createContext } from 'react';

const PageContext = createContext({
	activePage: '',
	switchActivePage: () => {},
});

export default PageContext;
