const Navbar = ({ onToggle }) => {
   return (
      <nav className='header__nav'>
         <ul className='nav-links' data-visible={onToggle}>
            <li>
               <a href='#'>About</a>
            </li>
            <li>
               <a href='#'>Discover</a>
            </li>
            <li>
               <a href='#'>Get Started</a>
            </li>
         </ul>
         <div class='blur' data-visible={onToggle}></div>
      </nav>
   );
};

export default Navbar;
