import Card from "../UI/Card";

const Dashboard = ({ progress, backers }) => {
   return (
      <Card className='dashboard'>
         <h2 className='visually-hidden'>Project details</h2>
         <div>
            <h3>${progress.toLocaleString()}</h3>
            <p className='dashboard__text'>of $100,000 backed</p>
         </div>

         <span className='rule'></span>

         <div>
            <h3>{backers.toLocaleString()}</h3>
            <p className='dashboard__text'>total backers</p>
         </div>

         <span className='rule'></span>

         <div>
            <h3>56</h3>
            <p className='dashboard__text'>days left</p>
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
