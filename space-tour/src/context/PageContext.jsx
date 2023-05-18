import { createContext } from 'react';

const PageContext = createContext({
	activePage: '',
	switchActive: () => {},
});

export default PageContext;
