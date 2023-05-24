import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DestinationPage from './pages/Destination';
import TechnologyPage from './pages/Technology';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import CrewPage from './pages/Crew';
import Root from './routes/Root';
import './styles/main.scss';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: '/crew', element: <CrewPage /> },
				{ path: '/technology', element: <TechnologyPage /> },
				{ path: '/destination', element: <DestinationPage /> },
			],
		},
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
