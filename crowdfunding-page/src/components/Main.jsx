import { useState, useEffect } from "react";
import FormModal from "./modals/Form";
import SuccessModal from "./modals/Success";
import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import { nanoid } from "nanoid";

const Main = () => {
   // const [pledges, setPledges] = useState([
   //    {
   //       desc: " Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
   //       label: "Pledge with no reward",
   //       amount: null,
   //       id: `option-${nanoid()}`,
   //       checked: false,
   //       value: 0,
   //    },
   //    {
   //       desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
   //       label: "Bamboo Stand",
   //       price: "Pledge $25 or more",
   //       amount: "101",
   //       id: `option-${nanoid()}`,
   //       checked: false,
   //       value: 25,
   //    },
   //    {
   //       desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
   //       label: "Black Edition Stand",
   //       price: "Pledge $75 or more",
   //       amount: "64",
   //       id: `option-${nanoid()}`,
   //       checked: false,
   //       value: 75,
   //    },
   //    {
   //       desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
   //       label: "Mahogany Special Edition",
   //       price: "Pledge $200 or more",
   //       amount: "0",
   //       id: `option-${nanoid()}`,
   //       checked: false,
   //       value: 200,
   //    },
   // ]);

   const [showModal, setShowModal] = useState(false);
   const [isConfirmed, setIsConfirmed] = useState(false);

   const [progress, setProgress] = useState(89914);
   const [backers, setBackers] = useState(5010);

   useEffect(() => {
      const storedProgress = localStorage.getItem("progress");
      const numOfBackers = localStorage.getItem("storedBackers");

      if (storedProgress) {
         setProgress(parseInt(storedProgress));
      }

      if (numOfBackers) {
         setBackers(parseInt(numOfBackers));
      }
   }, []);

   const thanks = (amount) => {
      setIsConfirmed(true);

      setProgress((prevProgress) => prevProgress + amount);
      setBackers((prevBackers) => prevBackers + 1);

      localStorage.setItem("progress", progress + amount);
      localStorage.setItem("storedBackers", backers + 1);
   };

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
               // pledges={pledges}
               // setPledges={setPledges}
            />
            <SuccessModal showModal={isConfirmed} hideModal={bye} />
            <Hero showModal={displayDialog} />
            <Dashboard progress={progress} backers={backers} />
            <Project showModal={displayDialog} />
         </div>
      </main>
   );
};

export default Main;
