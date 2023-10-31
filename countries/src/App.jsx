import './App.css';
import Root from './routes/Root';
import Error from './pages/Error';
import Countries from './pages/Countries';
import Welcome from './pages/Welcome';
import CountryDetails from './pages/CountryDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryProvider from './context/CountryProvider';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
         { index: true, element: <Welcome /> },
         {
            path: '/countries',
            element: <Countries />,
         },
         { path: '/countries/:name', element: <CountryDetails /> },
      ],
   },
]);

function App() {
   return (
      <CountryProvider>
         <RouterProvider router={router} />;
      </CountryProvider>
   );
}

export default App;
