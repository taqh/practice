
function Button({ extraClass, children }) {
   return (
      <button
         className={`rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White focus-visible:outline-DarkBlue dark:focus-visible:outline-White transition-colors duration-300 ${extraClass}`}
      >
         {children}
      </button>
   );
}

export default Button;
