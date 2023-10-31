import { Link } from 'react-router-dom';

function Country(props) {
   const name = props.name.toLowerCase();

   return (
      <li
         className='mx-md:max-w-[300px] hover:scale-105 shadow-md rounded-md bg-White dark:bg-DarkBlue dark:text-White text-TxtLight transition duration-300'
      >  
         <Link to={`${name.replace(/\s+/g, '-')}`} className='dark:focus-visible:outline-White outline-DarkBlue'> {/* replace(/\s+/g, '-') is used to replace all spaces with dashes */}
            <div>
               <img
                  src={props.flag}
                  alt={props.alt ? props.alt : `The flag of ${props.name}`}
                  className='h-[160px] min-w-full object-cover rounded-t-md'
               />
            </div>
            <div className='p-6 flex flex-col gap-4'>
               <p className='font-bold'>{props.name}</p>
               <ul>
                  <li className='font-semibold mb-1'>
                     Population:{' '}
                     <span className='font-light'>
                        {props.population.toLocaleString()}
                     </span>
                  </li>
                  <li className='font-semibold mb-1'>
                     Region: <span className='font-light'>{props.region}</span>
                  </li>
                  <li className='font-semibold mb-1'>
                     Capital:{' '}
                     <span className='font-light'>{props.capital?.join(', ')}</span>
                  </li>
               </ul>
            </div>
         </Link>
      </li>
   );
}

export default Country;
