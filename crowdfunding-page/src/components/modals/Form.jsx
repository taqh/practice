import Modal from "./Modal";
import Button from "../UI/Button";
import cross from "../../assets/images/icon-close-modal.svg";

const Form = ({ showModal, hideModal }) => {
   return (
      <Modal open={showModal} className='modal--selection'>
         <h2>Back this project</h2>
         <Button onClick={() => hideModal()}>
            <img src={cross} alt='cancel' />
         </Button>
         <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
         </p>
         <form>
            <div className='pledge'>
               <div className='pledge__info'>
                  <input type='radio' name='option' />
                  <label className='label'>Pledge with no reward</label>

                  <p className='desc'>
                     Choose to support us without a reward if you simply believe
                     in our project. As a backer, you will be signed up to
                     receive product updates via email.
                  </p>
               </div>

               <div className='pledge__confirm'>
                  <p>Enter your pledge</p>
                  <input className='commit' type='number' id='support' />
                  <label className='sign' htmlFor='support'>
                     $
                  </label>
                  <Button className='submit'>Continue</Button>
               </div>
            </div>

            <div className='pledge'>
               <div className='pledge__info'>
                  <input type='radio' name='option' />
                  <label className='label'>Bamboo Stand</label>
                  <p className='price'>Pledge $25 or more</p>
                  <p className='amount'>
                     <span>101</span>
                     left
                  </p>
                  <p className='desc'>
                     You get an ergonomic stand made of natural bamboo. You've
                     helped us launch our promotional campaign, and you’ll be
                     added to a special Backer member list.
                  </p>
               </div>

               <div className='pledge__confirm'>
                  <p>Enter your pledge</p>
                  <input className='commit' type='number' id='bamboo' />
                  <label className='sign' htmlFor='bamboo'>
                     $
                  </label>
                  <Button className='submit'>Continue</Button>
               </div>
            </div>

            <div className='pledge'>
               <div className='pledge__info'>
                  <input type='radio' name='option' />
                  <label className='label'>Black Edition Stand</label>
                  <p className='price'>Pledge $75 or more</p>
                  <p className='amount'>
                     <span>64</span>
                     left
                  </p>
                  <p className='desc'>
                     You get a Black Special Edition computer stand and a
                     personal thank you. You’ll be added to our Backer member
                     list. Shipping is included.
                  </p>
               </div>

               <div className='pledge__confirm'>
                  <p>Enter your pledge</p>
                  <label className='sign' htmlFor='black'>
                     $
                  </label>
                  <input className='commit' type='number' id='black' />
                  <Button className='submit'>Continue</Button>
               </div>
            </div>

            <div className='pledge'>
               <div className='pledge__info'>
                  <input type='radio' name='option' />
                  <label className='label'>
                     Mahogany Special Edition
                  </label>
                  <p className='price'>Pledge $200 or more</p>
                  <p className='amount'>
                     <span>0</span>
                     left
                  </p>
                  <p className='desc'>
                     You get two Special Edition Mahogany stands, a Backer
                     T-Shirt, and a personal thank you. You’ll be added to our
                     Backer member list. Shipping is included.
                  </p>
               </div>
            </div>
         </form>
      </Modal>
   );
};

export default Form;
