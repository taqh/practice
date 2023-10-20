import { Link } from 'react-router-dom';

function CountryCard(props) {
   const name = props.name.toLowerCase();

   return (
      <div
         className='hover:scale-105 shadow-md rounded-md bg-White dark:bg-DarkBlue dark:text-White text-DarkBlue transition duration-300'
        
      >
         <Link to={`${name.replace(/\s+/g, '-')}`}>
            <div>
               <img
                  src={props.flag}
                  alt={props.alt}
                  className='h-[199px] md:h-[160px] min-w-full object-cover rounded-t-md'
               />
            </div>
            <div className='p-6 flex flex-col gap-5'>
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
