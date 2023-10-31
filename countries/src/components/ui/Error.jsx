function Error({ onClick }) {
   return (
      <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
         <h1 className='text-DarkBlue dark:text-white'>
            An error occured commuicating with the API{' '}
         </h1>
         <button
            className='w-fit h-fit py-2 px-6 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300 '
            onClick={onClick}
         >
            Try again
         </button>
      </div>
   );
}

export default Error;
