import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Root() {
	return (
		<>
			<Navigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Root;
