const Modal = ({className, children, open}) => {
   return (
      <dialog open={open} className={`modal ${className}`}>{children}</dialog>
   );
};

export default Modal;
