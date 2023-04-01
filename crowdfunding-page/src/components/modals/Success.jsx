import Modal from "./Modal";
import Button from "../UI/Button";
import check from '../../assets/images/icon-check.svg'

const Success = ({showModal, hideModal}) => {
   return (
      <Modal open={''} className='modal--success'>
         <div>
            <img src={check} alt="checkmark"/>
            <h3>Thanks for your support! </h3>
            <p>
               Your pledge brings us one step closer to
               sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
               an email once our campaign is completed. 
            </p>
            <Button className='success__btn' onClick={() => hideModal()}>Got it!</Button> 
         </div>
      </Modal>
   );
};

export default Success;
