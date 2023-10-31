function LoadMore({ onClick }) {
   return (
      <div className='flex justify-center'>
         <button
            className='self-center w-fit h-fit py-2 px-6 mt-6 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White focus-visible:outline-DarkBlue dark:focus-visible:outline-White transition-colors duration-300'
            onClick={onClick}
         >
            Load More
         </button>
      </div>
   );
}

export default LoadMore;
