import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Navbar from "../components/UI/Navbar";
import NavToggle from "./UI/NavToggle";

const Header = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => {
      setShowMenu((prevMenu) => !prevMenu);
   };

   return (
      <header className='header'>
         <img src={logo} alt='crowdfund' className='header__logo' />
         <Navbar onToggle={showMenu} />
         <NavToggle onClick={toggleMenu} onToggle={showMenu} />
      </header>
   );
};

export default Header;
