import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Root() {
   return (
      <div id='app' className='min-h-screen dark:bg-DarkBg transition-colors duration-300'>
         <Header />
         <main className='grid gap-12 max-w-[87.5rem] min-h-[80vh] mx-auto p-6 md:px-14'>
            <Outlet />
         </main>
      </div>
   );
}

export default Root;