import ThemeSwitch from './theme/ThemeSwitch';

function Header() {
   return (
      <header className='shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300'>
         <div className='max-w-[82.5rem] mx-auto px-4 py-6 md:px-6 flex justify-between'>
            <h1 className='font-bold md:text-xl lg:text-2xl'>Where in the world?</h1>
            <ThemeSwitch />
         </div>
      </header>
   );
}

export default Header;
