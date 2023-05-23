import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';


function Root() {
	const { pathname } = useLocation();
	const currentPath = pathname.substring(1).length > 0 ? pathname.substring(1) : 'home'  


	return (
		<div id='app' className={currentPath}>
			<Navigation />
			<main id='main' className={`main main--${currentPath}`}>
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
