const Button = ({ children, className, onClick }) => {
   return (
      <button
         className={`w-fit p-1 rounded-md outline-inherit transition duration-300 ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
