import Modal from "./Modal";
import Button from "../UI/Button";
import cross from "../../assets/images/icon-close-modal.svg";

const Form = ({ showModal }) => {
   return (
      <Modal open={showModal} className='modal--selection'>
            <h2>Back this project</h2>
            <button type="button">
               <img src={cross} alt='cancel' />
            </button>
            <p>
               Want to support us in bringing Mastercraft Bamboo Monitor Riser
               out in the world?
            </p>

         <form>
            <div className='pledge'>
               <input type='radio' name='option' />
               <label className='pledge__label'>Pledge with no reward</label>

               <p>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
               </p>
               <input className="pledge__input" type='number' name='option' id="support"/>
               <label className='input-label' htmlFor="support">$</label>
               <Button className='submit'>Continue</Button>
            </div>

            <div className='pledge'>
               <input type='radio' name='option' />
               <label className='pledge__label'>Bamboo Stand</label>
               <p className='price'>Pledge $25 or more</p>
               <p className='pledge__amount'>
                  <span>101</span>
                  left
               </p>
               <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
               </p>
               <input className="pledge__input" type='number' id="bamboo" />
               <label className='input-label' htmlFor="bamboo">$</label>
               <Button className='submit'>Continue</Button>
            </div>

            <div className='pledge'>
               <input type='radio' name='option' />
               <label className='pledge__label'>Black Edition Stand</label>
               <p className='price'>Pledge $75 or more</p>
               <p className='pledge__amount'>
                  <span>64</span>
                  left
               </p>
               <p>
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
               </p>
               <label className='input-label' htmlFor="black">$</label>
               <input className="pledge__input" type='number' id="black"/>
               <Button className='submit'>Continue</Button>
            </div>

            <div className='pledge'>
               <input type='radio' name='option' />
               <label className="pledge__label">Mahogany Special Edition</label>
               <p className='price'>Pledge $200 or more</p>
               <p className='pledge__amount'>
                  <span>0</span>
                  left
               </p>
               <p>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
               </p>
            </div>
         </form>
      </Modal>
   );
};

export default Form;
