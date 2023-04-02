import Button from "../UI/Button";
import check from "../../assets/images/icon-check.svg";
import { Dialog } from "@headlessui/react";

const Success = ({ showModal, hideModal }) => {
   return (
      <Dialog open={showModal} onClose={() => hideModal()}>
         <div className='backdrop' aria-hidden='true' />

         <div className='scroll'>
            <div className='center'>
               <Dialog.Panel className='modal modal--success'>
                  <img src={check} alt='checkmark' />
                  <Dialog.Title>Thanks for your support! </Dialog.Title>
                  <Dialog.Description>
                     Your pledge brings us one step closer to sharing
                     Mastercraft Bamboo Monitor Riser worldwide. You will get an
                     email once our campaign is completed.
                  </Dialog.Description>
                  <Button className='success__btn' onClick={() => hideModal()}>
                     Got it!
                  </Button>
               </Dialog.Panel>
            </div>
         </div>
      </Dialog>
   );
};

export default Success;
