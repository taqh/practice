import { Link } from 'react-router-dom';

function Explore() {
   return (
      <>
         <div className='flex flex-col items-center justify-center gap-8 text-DarkBg dark:text-White transition duration-300'>
            <p>Visit any country in the world</p>
            <Link to='/countries' className='px-4 py-2 rounded-md shadow-md text-DarkBg dark:text-White bg-White dark:bg-DarkBlue transition duration-300'>Explore</Link>
         </div>
      </>
   );
}

export default Explore;
