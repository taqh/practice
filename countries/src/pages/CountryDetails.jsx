import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Back } from '../components/ui/Icons';
import CountryContext from '../context/CountryContext';
import { DetailSkeleton } from '../components/ui/DetailSkeleton';
import Error from '../components/ui/Error';

function CountryDetails() {
   scrollTo(0, 0);
   const params = useParams();
   const navigate = useNavigate();
   // const location = useLocation();
   const { countryList } = useContext(CountryContext);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
   const [countryDetails, setCountryDetails] = useState([]);
   const [borderCountries, setBorderCountries] = useState([]);
   const [paramsName, setParamsName] = useState(params.name);
   // const [curretPath, setCurrentPath] = useState(location.pathname.split('/')[2]);

   const getCountryDetails = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            `https://restcountries.com/v3.1/name/${paramsName.replace(/-/g,' ')}`
         );
         const data = await response.json();
         if (response.ok) {
            setCountryDetails(data[0]);
            // simulate loading to avoid flickering
            setTimeout(() => {
               setLoading(false);
            }, 1000);
         }
      } catch (error) {
         setError(true);
         setLoading(false);
         console.error(error);
      }
      setLoading(false);
   };

   useEffect(() => {
      getCountryDetails();
      return () => {};
   }, [paramsName]);

   useEffect(() => {
      const getBorderCountryName = () => {
         const mappedBorders = countryDetails?.borders?.map((border) => {
            const fullName = countryList?.find((country) => country.cca3 === border)
            return fullName ? fullName.name.common : border;
            
         })
         setBorderCountries(mappedBorders);
      };
      getBorderCountryName();
      return () => {};
   }, [countryList, countryDetails]);


   return (
      <>
         <h1 className='sr-only'>{`Country details: ${countryDetails.name?.common}`}</h1>
         <button
            onClick={() => navigate('/countries')}
            className='flex gap-3 items-center w-fit h-fit py-2 px-8 mt-7 md:mt-10 lg:mt-12 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White focus-visible:outline-DarkBlue dark:focus-visible:outline-White transition-colors duration-300'
         >
            <Back aria-hidden='true' />
            Back
         </button>
         {loading ? (
            <DetailSkeleton />
         ) : error ? (
            <Error onClick={() => getCountryDetails()}/>
         ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-20'>
               <div>
                  <img
                     src={countryDetails.flags?.svg}
                     alt={countryDetails.flags?.alt}
                     className='object-cover max-h-[250px] md:max-h-[400px] min-w-full rounded-sm'
                  />
               </div>
               <article className='grid md:grid-cols-2 gap-6 md:grid-rows-[auto_1fr_auto] text-TxtLight dark:text-White transition duration-300'>
                  <h2 className='font-bold text-3xl capitalize md:col-span-2'>
                     {countryDetails.name?.common}
                  </h2>
                  <div className='col-start-1'>
                     <p className='font-semibold mb-2'>
                        Native name:{' '}
                        <span className='font-light'>
                           {countryDetails.name?.nativeName? Object.values(countryDetails.name.nativeName)[0].common : ''}
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Population:{' '}
                        <span className='font-light'>
                           {countryDetails.population?.toLocaleString()}
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Region:{' '}
                        <span className='font-light'>
                           {countryDetails.region}
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Sub Region:{' '}
                        <span className='font-light'>
                           {countryDetails.subregion}
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Capital:{' '}
                        <span className='font-light'>
                           {countryDetails.capital?.join(', ')}
                        </span>
                     </p>
                  </div>
                  <div className=''>
                     <p className='font-semibold mb-2'>
                        Top Level Domain:{' '}
                        <span className='font-light'>
                           {countryDetails.tld?.join(', ')}
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Currencies:{' '}
                        <span className='font-light'>
                           {countryDetails.currencies ? 
                              Object.keys(countryDetails.currencies).map(currencyCode =>  countryDetails.currencies[currencyCode].name).join(', ') : ''
                           }
                        </span>
                     </p>
                     <p className='font-semibold mb-2'>
                        Languages:{' '}
                        <span className='font-light'>
                           {countryDetails.languages? Object.values(countryDetails.languages).join(', ') : ''}
                        </span>
                     </p>
                  </div>
                  
                  {countryDetails.borders?.length > 0 && (   
                  <div className='flex flex-col lg:flex-row gap-3 md:col-span-2 '>
                     <p className='font-semibold whitespace-nowrap'>Border Countries:</p>
                     <ul className='flex gap-3 flex-wrap'>
                        {borderCountries?.map((borderCountry, index) => (
                           <li
                              key={index}
                              className='shadow-md rounded-md dark:bg-DarkBlue bg-White text-DarkBg dark:text-White transition duration-300 '
                           >
                           <Link 
                              to={`/countries/${borderCountry.toLowerCase().replace(/\s+/g, '-')}`} 
                              onClick={(() => setParamsName(borderCountry))}
                              className='block px-2.5 py-1.5 focus-visible:outline-DarkBlue dark:focus-visible:outline-White'
                           >
                              {borderCountry}
                           </Link>
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
