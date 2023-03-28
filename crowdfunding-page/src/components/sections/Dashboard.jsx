import { useState } from "react";
import Card from "../UI/Card";

const Dashboard = () => {
   const [progress, setProgress] = useState(89914);

   return (
      <Card className='dashboard'>
         <div>
            <h3>${progress.toLocaleString()}</h3>
            <p className="dashboard__text">of $100,000 backed</p>
         </div>

         <hr/>

         <div>
            <h3>5,010</h3>
            <p className="dashboard__text">total backers</p>
         </div>

         <hr/>
         
         <div>
            <h3>56</h3>
            <p className="dashboard__text">days left</p>
         </div>
         <progress
            className='dashboard__progress-bar'
            value={progress}
            min='0'
            max='100000'
         ></progress>
      </Card>
   );
};

export default Dashboard;
