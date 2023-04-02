import { useState } from "react";
import FormModal from "./modals/Form";
import SuccessModal from "./modals/Success";
import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import Project from "./sections/Project";


const Main = () => {
   const [showModal, setShowModal] = useState(false);
   const [isConfirmed, setIsConfirmed] = useState(false);

   const thanks = () => setIsConfirmed(true);
   const bye = () => setIsConfirmed(false);

   const displayDialog = () => setShowModal(true);
   const closeDialog = () => setShowModal(false);

   return (
      <main>
         <div className='main'>
            <FormModal
               showModal={showModal}
               hideModal={closeDialog}
               onConfirm={thanks}
            />
            <SuccessModal showModal={isConfirmed} hideModal={bye} />
            <Hero showModal={displayDialog} />
            <Dashboard />
            <Project showModal={displayDialog} />
         </div>
      </main>
   );
};

export default Main;
