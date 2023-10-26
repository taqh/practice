import './skeleton.css';

export const Skeleton = () => {
   return (
      <div className='skeleton-card'>
         <div className='skeleton skeleton-flag'></div>
         <div className='skeleton-content'>
            <div className='skeleton skeleton-name'></div>
            <div className='skeleton-stats'>
               <div className='skeleton skeleton-stat'></div>
               <div className='skeleton skeleton-stat'></div>
               <div className='skeleton skeleton-stat'></div>
            </div>
         </div>
      </div>
   );
};
