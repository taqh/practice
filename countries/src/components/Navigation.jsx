import ThemeSwitch from './theme/ThemeSwitch';

function Navigation() {
   return (
      <header className='bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300'>
         <div className='max-w-[87.5rem] mx-auto py-8 px-8 md:py-6 flex justify-between'>
            <h1 className='font-bold'>Where in the world?</h1>
            <ThemeSwitch />
         </div>
      </header>
   );
}

export default Navigation;
