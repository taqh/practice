import { useState } from "react";
import Button from "../UI/Button";

const Option = (props) => {

   const handleCheck = () => {
      props.onSelect(props.id);
   };
   
   const [value, setValue] = useState(props.value)

   const [invalid, setInvalid] = useState(false)

   const handleChange = (e) => {
      setValue(e.target.value)
      if(e.target.value < value){
         setInvalid(true)
      } else {
         setInvalid(false)
      }
   }

   return (
      <div className={`pledge ${props.isChecked ? "active" : ""} ${invalid ? 'invalid' : ''}`}>
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
               <span>{props.amount}</span>
               {props.amount && "left"}
            </p>
            <p className='desc'>{props.desc}</p>
         </div>

         {props.isChecked && (
            <div className='pledge__confirm'>
               <p>Enter your pledge</p>
               <input className={`commit ${invalid ? 'invalid' : ''}`} type='number' id='support' value={value} onChange={handleChange}/>
               <label className='sign' htmlFor='support'>
                  $
               </label>
               <Button className='submit' onClick={() => props.onConfirm()}>
                  Continue
               </Button>
            </div>
         )}
      </div>
   );
};

export default Option;
