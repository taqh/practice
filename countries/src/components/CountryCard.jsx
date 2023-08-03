import { Link, useParams } from 'react-router-dom';

function CountryCard(props) {
   const params = useParams();
   const name = props.name.toLowerCase();
   return (
      <Link
         to={`${name}`}
         className='shadow-md rounded-md bg-White dark:text-White text-DarkBlue dark:bg-DarkBlue transition-colors duration-300'
      >
         <div>
            <img
               src={props.flag}
               alt={`The flag of ${props.name}`}
               className='min-h-[200px] '
            />
         </div>
         <div className='p-5 flex flex-col gap-5'>
            <p className='font-bold'>{props.name}</p>
            <div>
               <p className='font-semibold mb-1.5'>
                  Population:{' '}
                  <span className='font-light'>
                     {props.population.toLocaleString()}
                  </span>
               </p>
               <p className='font-semibold mb-1.5'>
                  Region: <span className='font-light'>{props.region}</span>
               </p>
               <p className='font-semibold mb-1.5'>
                  Capital: <span className='font-light'>{props.capital}</span>
               </p>
            </div>
         </div>
      </Link>
   );
}

export default CountryCard;
