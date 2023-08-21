import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
   const params = useParams();
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [countryDetails, setCountryDetails] = useState([]);
   // const details = countryDetails[0];

   const getCountryDetails = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            `https://restcountries.com/v3.1/name/${params.name}`
         );
         const data = await response.json();
         if (response.ok) {
            setCountryDetails(data[0]);
            console.log(data[0]);
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

   const loader = (
      <div className='min-h-[60vh] grid place-content-center'>
         <h1 className='text-DarkBlue dark:text-white'>loading...</h1>
      </div>
   );

   return (
      <>
         <Link
            to='..'
            relative='path'
            className='w-fit h-fit py-2 px-6 mt-8 bg-White dark:bg-DarkBlue rounded-md shadow-md'
         >
            Back
         </Link>
         {loading ? (
            loader
         ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
               <img
                  // src={countryDetails.flags.svg}
                  className='min-h-[200px]'
                  alt={`flag of ${params.name}`}
               />
               <article className='grid md:grid-cols-2 gap-6 md:grid-rows-[auto_1fr]'>
                  <h2 className='font-bold text-2xl capitalize'>
                     {params.name}
                  </h2>
                  <div className='col-start-1'>
                     <p className='font-semibold mb-1.5'>
                        Native name:{' '}
                        <span className='font-light'>
                           {/* {countryDetails.name.nativeName} */}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Population:{' '}
                        <span className='font-light'>
                           {/* {countryDetails.population.toLocaleString()} */}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Region:{' '}
                        <span className='font-light'>
                           {countryDetails.region}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Sub Region:{' '}
                        <span className='font-light'>
                           {countryDetails.subregion}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Capital:{' '}
                        <span className='font-light'>
                           {countryDetails.capital}
                        </span>
                     </p>
                  </div>
                  <div className=''>
                     <p className='font-semibold mb-1.5'>
                        Top Level Domain:{' '}
                        <span className='font-light'>{countryDetails.tld}</span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Currencies:{' '}
                        <span className='font-light'>
                           {/* {countryDetails.currencies} */}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Languages:{' '}
                        <span className='font-light'>
                           {/* {countryDetails.languages} */}
                        </span>
                     </p>
                  </div>
               </article>

               <div className='flex flex-col md:flex-row gap-3 h-fit md:col-start-2 md:items-center'>
                  <p className='font-semibold '>Border Countries:</p>
                  <ul className='flex gap-3'>
                     <li className='shadow-md rounded-sm py-1 px-2.5 dark:bg-DarkBlue dark:text-White text-DarkBlue bg-White'>
                        <Link>France</Link>
                     </li>
                     <li className='shadow-md rounded-sm py-1 px-2.5 dark:bg-DarkBlue dark:text-White text-DarkBlue bg-White'>
                        <Link>Germany</Link>
                     </li>
                     <li className='shadow-md rounded-sm py-1 px-2.5 dark:bg-DarkBlue dark:text-White text-DarkBlue bg-White'>
                        <Link>Netherlands</Link>
                     </li>
                  </ul>
               </div>
            </div>
         )}
      </>
   );
}

export default CountryDetails;
