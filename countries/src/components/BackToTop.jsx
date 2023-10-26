import { useEffect, useState } from 'react';
import { Arrow } from '../components/Icons';

function BackToTop() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Check the scroll position and update the visibility state
         if (window.scrollY > 200) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <button
         className={`${isVisible ? 'translate-y-0' : 'translate-y-28'} z-50 flex items-center justify-center fixed w-14 h-14 bottom-10 right-10 p-2 rounded-full shadow-md bg-White dark:bg-DarkBlue focus-within:outline-DarkBlue dark:focus-within:outline-White stroke-DarkBlue dark:stroke-White transition duration-300`}
         onClick={() => scrollTo(0, 0)}
      >
         <span className='sr-only'>scroll to top</span>
         <span className='flex flex-col rotate-[180deg]'>
            <Arrow aria-hidden='true' />
            <Arrow aria-hidden='true' />
         </span>
      </button>
   );
}

export default BackToTop;
