const Navbar = ({ onToggle }) => {
   return (
      <nav className='header__nav'>
         <ul className='nav-links' data-visible={onToggle}>
            <li>
               <a href='#' className="link">About</a>
            </li>
            <li>
               <a href='#' className="link">Discover</a>
            </li>
            <li>
               <a href='#' className="link">Get Started</a>
            </li>
         </ul>
         <div className='blur' data-visible={onToggle}></div>
      </nav>
   );
};

export default Navbar;
