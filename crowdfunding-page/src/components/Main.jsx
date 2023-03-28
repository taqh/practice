import Dashboard from "./sections/Dashboard";
import Hero from "./sections/Hero";
import Project from "./sections/Project";

const Main = () => {
   return (
      <main className='main'>
         <Hero />
         <Dashboard />
         <Project />
      </main>
   );
};

export default Main;
