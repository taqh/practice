import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageProvider from './context/PageProvider';
import DestinationPage from './pages/Destination';
import TechnologyPage from './pages/Technology';
import Root from './routes/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import CrewPage from './pages/Crew';
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
		<PageProvider>
			<RouterProvider router={router} />
		</PageProvider>
	);
}

export default App;
