import Button from "../UI/Button";
import cross from "../../assets/images/icon-close-modal.svg";
import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import Option from "./Option";
import { nanoid } from "nanoid";

const Form = ({ showModal, hideModal, onConfirm }) => {

   const handleSubmit = (e) => {
      e.preventDefault();
      hideModal();
   };

   const [pledges, setPledges] = useState([
      {
         desc: " Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
         label: "Pledge with no reward",
        
         id: `option-${nanoid()}`,
         checked: false,
         value: 0,
      },
      {
         desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
         label: "Bamboo Stand",
         price: "Pledge $25 or more",
         amount: 101,
         id: `option-${nanoid()}`,
         checked: false,
         value: 25,
      },
      {
         desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
         label: "Black Edition Stand",
         price: "Pledge $75 or more",
         amount: 64,
         id: `option-${nanoid()}`,
         checked: false,
         value: 75,
      },
      {
         desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
         label: "Mahogany Special Edition",
         price: "Pledge $200 or more",
         amount: 0,
         id: `option-${nanoid()}`,
         checked: false,
         value: 200,
      },
   ]);


   const handleSelect = (id) => {
      setPledges(prevState => prevState.map((pledge) => {
         if (pledge.id === id) {
            return {
               ...pledge,
               checked: true
            };
         } else {
            return {
               ...pledge,
               checked: false
            };
         }
      }));
   };

   useEffect(() => {
      const itemsInStock = localStorage.getItem("itemsInStock");
      if (itemsInStock) {
         setPledges(JSON.parse(itemsInStock));
      }
   }, []);

   const updateAmount = (itemId, newItemsLeft) => {
   
      // check for the id of the submitted field 
      const updatedOptions = pledges.map((pledge) => {
         // if it matches update that field with the newItemsLeft variable
         if (pledge.id === itemId) {
            return { ...pledge, amount: newItemsLeft };
         } else {
            return{
               ...pledge
            }
         }
      });
      setPledges(updatedOptions);
   
      localStorage.setItem("itemsInStock", JSON.stringify(updatedOptions));
   };

   const items = pledges.map((pledge) => (
      <Option
         desc={pledge.desc}
         label={pledge.label}
         price={pledge.price}
         amount={pledge.amount}
         key={pledge.id}
         id={pledge.id}
         isChecked={pledge.checked}
         onConfirm={onConfirm}
         onSelect={handleSelect}
         value={pledge.value}
         onUpdateItems={updateAmount}
      />
   ));

   return (
      <Transition show={showModal}>
         <Dialog onClose={() => hideModal()} className='dialog'>
            <div className='backdrop' aria-hidden='true' />

            <div className='scroll'>
               <div className='center'>
                  <Dialog.Panel className='modal modal--selection'>
                     <Dialog.Title>Back this project</Dialog.Title>
                     <Button onClick={() => hideModal()}>
                        <span className='visually-hidden'>close dialog</span>
                        <img src={cross} alt='cancel' className="cross"/>
                     </Button>
                     <Dialog.Description>
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                     </Dialog.Description>
                     <form onSubmit={handleSubmit}>{items}</form>
                  </Dialog.Panel>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};

export default Form;
