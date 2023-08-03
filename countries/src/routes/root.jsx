import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Root() {
   return (
      <div id='app' className='min-h-screen dark:bg-DarkBg transition-colors duration-300'>
         <Navigation />
         <main className='grid max-w-[87.5rem] min-h-[80vh] mx-auto p-6 md:px-8 gap-6 text-DarkBg dark:text-White transition-colors duration-300 '>
            <Outlet />
         </main>
      </div>
   );
}

export default Root;
