import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import './styles/main.scss';
import Root from './pages/Root';

function App() {
	const router = createBrowserRouter([
		{ path: '/', element: <Root />, errorElement: <ErrorPage /> },
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
