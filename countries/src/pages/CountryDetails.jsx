import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
   const params = useParams();
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [countryDetails, setCountryDetails] = useState([]);
   const details = countryDetails[0];

   const getCountryDetails = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            `https://restcountries.com/v3.1/name/${params.name}`
         );
         const data = await response.json();
         if (response.ok) {
            setCountryDetails(data);
            console.log(data);
         }
      } catch (error) {
         console.error(error);
         setError(true);
      }
      setLoading(false);
   };

   useEffect(() => {
      getCountryDetails();
      return () => {};
   }, []);

   return (
      <>
         {loading ? (
            <div className='min-h-[75vh] flex items-center justify-center'>
               <p>Loading...</p>
            </div>
         ) : (
            <>
               <Link
                  to='..'
                  relative='path'
                  className='w-fit h-fit py-2 px-6 mt-8 bg-White dark:bg-DarkBlue rounded-md shadow-md'
               >
                  Back
               </Link>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                  <img
                     src={details.flags.svg}
                     className='min-h-[200px]'
                     alt={`flag of ${params.name}`}
                  />
                  <article className='flex flex-col gap-6 min-h-[400px]'>
                     <h2 className='font-semibold'>{params.name}</h2>
                     {/* <div>
                        <p className='font-semibold mb-1.5'>
                           Native name:{' '}
                           <span className='font-light'>
                              {details.name.nativeName}
                           </span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Population:{' '}
                           <span className='font-light'>
                              {details.population.toLocaleString()}
                           </span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Region:{' '}
                           <span className='font-light'>{details.region}</span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Sub Region:{' '}
                           <span className='font-light'>
                              {details.subregion}
                           </span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Capital:{' '}
                           <span className='font-light'>{details.capital}</span>
                        </p>
                     </div>
                     <div>
                        <p className='font-semibold mb-1.5'>
                           Top Level Domain:{' '}
                           <span className='font-light'>
                              {details.name.nativeName}
                           </span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Currencies:{' '}
                           <span className='font-light'>
                              {details.currencies}
                           </span>
                        </p>
                        <p className='font-semibold mb-1.5'>
                           Languages:{' '}
                           <span className='font-light'>
                              {details.languages}
                           </span>
                        </p>
                     </div> */}
                  </article>
               </div>
            </>
         )}
      </>
   );
}

export default CountryDetails;
