import Button from "./Button";

const NavToggle = ({ onClick, onToggle }) => {
   return (
      <Button className='toggle' onClick={onClick}>
         <span className='visually-hidden'>Menu button</span>
         <span className='line top' data-active={onToggle}></span>
         <span className='line mid' data-active={onToggle}></span>
         <span className='line bottom' data-active={onToggle}></span>
      </Button>
   );
};

export default NavToggle;
