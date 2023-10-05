import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Back } from '../components/Icons';
import CountryContext from '../context/CountryContext';

function CountryDetails() {
   const params = useParams();
   const navigate = useNavigate(); 
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const {countryList} = useContext(CountryContext);
   const [countries, setCountries] = useState(countryList);
   const [countryDetails, setCountryDetails] = useState([]);
   const [borderCountries, setBorderCountries] = useState([]);

   const getCountryDetails = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            `https://restcountries.com/v3.1/name/${params.name.replace(/-/g, ' ')}`
         );
         const data = await response.json();
         if (response.ok) {
            setCountryDetails(data[0]);
            console.log(data[0]);
         }
      } catch (error) {
         console.error(error);
         setError(true);
         setLoading(false);
      }
      setLoading(false);
   };

   useEffect(() => {
      getCountryDetails();
      return () => {};
   }, []);

   useEffect(() => {
      const getBorderCountryName = () => {
         const mappedBorderCountries = countryDetails?.borders?.map((border) => {
            const fullName = countries?.find((country) => country.cca3 === border)
            return fullName ? fullName.name.common : border;
            
         })
         setBorderCountries(mappedBorderCountries);
      }
      getBorderCountryName();
      return () => {};
   }, [countries, countryDetails]);

  

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
         <button
            onClick={() => navigate(-1)}
            className='flex gap-3 items-center w-fit h-fit py-2 px-8 mt-12 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300 '
         >
            <Back aria-hidden='true'/>
            Back
         </button>
         {loading ? (
            loader
         ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-20'>
               <div>
                  <img
                     src={countryDetails.flags?.svg}
                     alt={countryDetails.flags?.alt}
                     className='object-cover lg:h-[400px] min-w-full rounded-sm'
                  />
               </div>
               <article className='grid md:grid-cols-2 gap-6 md:grid-rows-[auto_1fr_auto] text-DarkBg dark:text-White transition duration-300'>
                  <h2 className='font-bold text-2xl capitalize'>
                     {countryDetails.name?.common}
                  </h2>
                  <div className='col-start-1'>
                     <p className='font-semibold mb-1.5'>
                        Native name:{' '}
                        <span className='font-light'>
                           {countryDetails.name?.nativeName[0]?.common}
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
                                 {countryDetails.currencies[currencyCode].name} ({currencyCode}){' '}
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
                  
                  {countryDetails.borders?.length > 0 && (   
                  <div className='flex flex-col lg:flex-row gap-3 md:col-span-2 m:items-center'>
                     <p className='font-semibold whitespace-nowrap'>Border Countries:</p>
                     <ul className='flex gap-3 flex-wrap'>
                        {borderCountries?.map((borderCountry, index) => (
                           <li
                              key={index}
                              className='h-fit shadow-md rounded-sm py-1 px-2.5 dark:bg-DarkBlue bg-White  transition duration-300'
                           >
                              <Link to={`/countries/${borderCountry.toLowerCase().replace(/\s+/g, '-')}`}>{borderCountry}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  )}
               </article>
            </div>
         )}
      </>
   );
}

export default CountryDetails;
