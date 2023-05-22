import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useContext } from 'react';
import PageContext from '../context/PageContext';

function Root() {
	const { activePage } = useContext(PageContext);

	return (
		<div id='app' className={activePage}>
			<Navigation />
			<main id='main' className={`main main--${activePage}`}>
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
