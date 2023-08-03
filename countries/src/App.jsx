import './App.css';
import Root from './routes/Root';
import Error from './pages/Error';
import Countries from './pages/Countries';
import Explore from './pages/Explore';
import CountryDetails from './pages/CountryDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
         { index: true, element: <Explore /> },
         {
            path: '/countries',
            element: <Countries /> /*loader={CountriesLoader}*/,
         },
         { path: '/countries/:name', element: <CountryDetails /> },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
