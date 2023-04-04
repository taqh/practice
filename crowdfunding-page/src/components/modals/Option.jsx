import { useState, useEffect } from "react";
import Button from "../UI/Button";

const Option = (props) => {
   const handleCheck = () => {
      props.onSelect(props.id);
   };
   const [itemsLeft, setItemsLeft] = useState(props.amount);
   const [value, setValue] = useState(props.value);

   const [invalid, setInvalid] = useState(false);

   const handleChange = (e) => {
      const currentValue = e.target.value;
      setValue(currentValue);
      if (currentValue < props.value) {
         setInvalid(true);
      } else {
         setInvalid(false);
      }
   };

   const handleConfirm = (amount) => {
      setItemsLeft((prevItemsLeft) => prevItemsLeft - 1);

      const newItemsLeft = itemsLeft - 1;
      setItemsLeft(newItemsLeft);

      props.onUpdateItems(props.id, newItemsLeft)
      props.onConfirm(amount);
   };

   return (
      <div
         className={`pledge ${props.isChecked ? "active" : ""} ${
            props.isChecked && invalid ? "invalid" : ""
         }`}
      >
         <div className='pledge__info'>
            <input
               type='radio'
               name='option'
               id={`select-${props.id}`}
               checked={props.isChecked}
               onChange={() => handleCheck()}
            />
            <label className='label' htmlFor={`select-${props.id}`}>
               {props.label}
            </label>
            <p className='price'>{props.price}</p>
            <p className='amount'>
               <span>{itemsLeft}</span>
               {props.amount && "left"}
            </p>
            <p className='desc'>{props.desc}</p>
         </div>

         {props.isChecked && (
            <div className='pledge__confirm'>
               <p>
                  {invalid
                     ? "Should be above stated price"
                     : "Enter your pledge"}
               </p>

               <input
                  className={`commit ${invalid ? "error" : ""}`}
                  type='number'
                  id='support'
                  value={value}
                  onChange={handleChange}
                  min={0}
                  max={100000}
               />
               <label className='sign' htmlFor='support'>
                  $
               </label>
               <Button
                  className={`submit ${invalid ? "disable" : ""}`}
                  onClick={() => handleConfirm(+value)}
               >
                  Continue
               </Button>
            </div>
         )}
      </div>
   );
};

export default Option;
