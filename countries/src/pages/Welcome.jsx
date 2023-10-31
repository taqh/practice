import { Link } from 'react-router-dom';

function Welcome() {
   return (
      <>
         <div className='min-h-[70vh] flex flex-col items-center justify-center gap-8 text-center text-DarkBg dark:text-White transition duration-300'>
            <h1>Get info on any country in the world</h1>
            <Link to='/countries' className='px-4 py-2 rounded-md shadow-md text-DarkBg dark:text-White bg-White dark:bg-DarkBlue transition duration-300'>Explore</Link>
         </div>
      </>
   );
}

export default Welcome;
