import { Link } from 'react-router-dom';

function CountryCard(props) {
   const name = props.name.toLowerCase();

   return (
      <div
         className='mx-md:max-w-[300px] max-h-[350px] hover:scale-105 shadow-md rounded-md bg-White dark:bg-DarkBlue dark:text-White text-DarkBlue transition duration-300'
      >
         <Link to={`${name.replace(/\s+/g, '-')}`}>
            <div>
               <img
                  src={props.flag}
                  alt={props.alt ? props.alt : `The flag of ${props.name}`}
                  className='h-[160px] min-w-full object-cover rounded-t-md'
               />
            </div>
            <div className='p-6 flex flex-col gap-4'>
               <p className='font-bold'>{props.name}</p>
               <div>
                  <p className='font-semibold mb-1'>
                     Population:{' '}
                     <span className='font-light'>
                        {props.population.toLocaleString()}
                     </span>
                  </p>
                  <p className='font-semibold mb-1'>
                     Region: <span className='font-light'>{props.region}</span>
                  </p>
                  <p className='font-semibold mb-1'>
                     Capital:{' '}
                     <span className='font-light'>{props.capital?.join(', ')}</span>
                  </p>
               </div>
            </div>
         </Link>
      </div>
   );
}

export default CountryCard;
