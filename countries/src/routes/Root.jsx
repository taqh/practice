import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Root() {
   return (
      <div id='app' className='min-h-screen dark:bg-DarkBg transition-colors duration-300'>
         <Header />
         <main className='grid grid-rows-[auto_1fr] gap-12 max-w-[82.5rem] min-h-[80vh] mx-auto p-4 md:p-6'>
            <Outlet />
         </main>
      </div>
   );
}

export default Root;