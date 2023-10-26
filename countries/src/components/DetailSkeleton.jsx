import './skeleton.css';

export const DetailSkeleton = () => {
   return (
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-20'>
         <div>
            <div className='skeleton skeleton-image'></div>
         </div>
         <div className='grid md:grid-cols-2 gap-6 md:grid-rows-[auto_1fr_auto] text-DarkBg dark:text-White transition duration-300'>
               <div className='skeleton name md:col-span-2'></div>
            <div className='col-start-1'>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
            </div>
            <div className='max-sm:hidden'>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
               <div className='skeleton skeleton-text'></div>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 md:col-span-2 md:items-center'>
               <div className='skeleton skeleton-label'></div>
               <div className='flex gap-3 flex-wrap'>
                  <div className='skeleton border-country'></div>
                  <div className='skeleton border-country'></div>
                  <div className='skeleton border-country'></div>
                  <div className='skeleton border-country'></div>
               </div>
            </div>
         </div>
      </div>
   );
};
