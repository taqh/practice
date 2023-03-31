import Card from "../UI/Card";
import Button from "../UI/Button";

const Project = ({ showModal }) => {
   return (
      <Card className='project'>
         <h3 className='project__heading'>About this project</h3>
         <p className='project__desc'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
         </p>
         <p className='project__desc'>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
         </p>
         <div className='project__item'>
            <h4>Bamboo Stand</h4>
            <p className='price'> Pledge $25 or more</p>
            <p className='item__desc'>
               You get an ergonomic stand made of natural bamboo. You've helped
               us launch our promotional campaign, and you’ll be added to a
               special Backer member list.
            </p>
            <p className='item__amount'>
               <span>101</span>
               left
            </p>
            <Button onClick={() => showModal()} className='item-btn'>
               Select Reward
            </Button>
         </div>

         <div className='project__item'>
            <h4>Black Edition Stand</h4>
            <p className='price'> Pledge $75 or more</p>
            <p className='item__desc'>
               You get two Special Edition Mahogany stands, a Backer T-Shirt,
               and a personal thank you. You’ll be added to our Backer member
               list. Shipping is included.
            </p>
            <p className='item__amount'>
               <span>64</span>
               left
            </p>
            <Button onClick={() => showModal()} className='item-btn'>
               Select Reward
            </Button>
         </div>

         <div className='project__item'>
            <h4>Mahogany Special Edition</h4>
            <p className='price'>Pledge $200 or more</p>
            <p className='item__desc'>
               You get a Black Special Edition computer stand and a personal
               thank you. You’ll be added to our Backer member list. Shipping is
               included.
            </p>
            <p className='item__amount'>
               <span>0</span>
               left
            </p>
            <Button onClick={() => showModal()} className='item-btn out'>
               Out of Stock
            </Button>
         </div>
      </Card>
   );
};

export default Project;
