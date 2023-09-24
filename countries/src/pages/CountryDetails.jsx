import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
   const params = useParams();
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [countryDetails, setCountryDetails] = useState([]);

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

   const errorMsg = (
      <div className='min-h-[60vh] grid place-content-center'>
         <h1 className='text-DarkBlue dark:text-white'>The page you requested does&apos;t exist</h1>
      </div>
   );

   return (
      <>
         <Link
            to='..'
            relative='path'
            className='w-fit h-fit py-2 px-12 mt-14 bg-White dark:bg-DarkBlue rounded-md shadow-md'
         >
            Back
         </Link>
         {loading ? (
            loader
         ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20'>
               <div>
                  <img
                     src={countryDetails.flags?.svg}
                     alt={countryDetails.flags?.alt}
                     className='object-cover md:h-[400px] min-w-full rounded-sm'
                  />
               </div>
               <article className='grid md:grid-cols-2 gap-6 md:grid-rows-[auto_1fr]'>
                  <h2 className='font-bold text-2xl capitalize'>
                     {countryDetails.name?.common}
                  </h2>
                  <div className='col-start-1'>
                     <p className='font-semibold mb-1.5'>
                        Native name:{' '}
                        <span className='font-light'>
                           {/* {countryDetails.name?.nativeName} */}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Population:{' '}
                        <span className='font-light'>
                           {countryDetails.population?.toLocaleString()}
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
                        <span className='font-light'>
                           {countryDetails.tld ? countryDetails.tld.join(', ') : ''}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Currencies:{' '}
                        <span className='font-light'>
                        {countryDetails.currencies
                           ? Object.keys(countryDetails.currencies).map(currencyCode => (
                              <span key={currencyCode}>
                                 {countryDetails.currencies[currencyCode].name} ({currencyCode})
                              </span>
                           ))
                        : ''}
                        </span>
                     </p>
                     <p className='font-semibold mb-1.5'>
                        Languages:{' '}
                        <span className='font-light'>
                           {countryDetails.languages? Object.values(countryDetails.languages).join(', ') : ''}
                        </span>
                     </p>
                  </div>

                  <div className='flex flex-col md:flex-row gap-3 h-fit md:col-span-2 md:items-center'>
                     <p className='font-semibold '>Border Countries:</p>
                     <ul className='flex gap-3 flex-wrap'>
                        {countryDetails.borders?.map((country, index) => (
                           <li
                              key={index}
                              className='shadow-md rounded-sm py-1 px-2.5 dark:bg-DarkBlue dark:text-White text-DarkBlue bg-White'
                           >
                              <Link to='.'>{country}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </article>
            </div>
         )}
      </>
   );
}

export default CountryDetails;
