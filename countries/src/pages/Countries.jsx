import { useEffect, useState } from 'react';
import { CountrySkeleton } from '../components/ui/CountrySkeleton';
import Filter from '../components/Filter';
import Country from '../components/Country';
import LoadMore from '../components/LoadMore';
import BackToTop from '../components/BackToTop';
import Error from '../components/ui/Error';

function Countries() {
   const maxCountries = 12;
   const [query, setQuery] = useState('');
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [countries, setCountries] = useState([]);
   const [noResults, setNoResults] = useState(false);
   const [filteredCountries, setFilteredCountries] = useState([]);
   const [currentMax, setCurrentMax] = useState(maxCountries);
   const countriesToDisplay = filteredCountries.slice(0, currentMax);
   const dummyList = new Array(maxCountries).fill(null); // create an array of 12 null values to map over and display skeleton loaders

   const getCountries = async () => {
      setLoading(true);
      try {
         const response = await fetch('https://restcountries.com/v3.1/all');
         const data = await response.json();
         if (response.ok) {
            setCountries(data);
            setFilteredCountries(data);
            setTimeout(() => {
               // simulate loading to avoid flickering
               setLoading(false);
            }, 1000);
            console.log(data);
         }
      } catch (error) {
         setError(true);
         setLoading(false);
         console.error(error);
      }
   };
   useEffect(() => {
      getCountries();
      return () => {};
   }, []);

   const loadMore = () => {
      setCurrentMax(currentMax + maxCountries);
   };

   const errorUI = (
      <div className='h-fit max-w-screen-md justify-self-center flex gap-3 flex-wrap justify-center text-DarkBlue dark:text-white text-lg'>
         <h2>{`No results found for`}</h2>
         <span className='break-all font-bold px-1 boder dark:border-White border-DarkBlue h-fit rounded-lg'>{`"${query}"`}</span>
      </div>
   );

   const loader = (
      <div className='country-list'>
         {dummyList.map((_, index) => (
            <CountrySkeleton key={index} />
         ))}
      </div>
   );

   const errorMsg = (
      <Error onClick={() => getCountries()}/>
   );

   const hud = loading ? loader : noResults ? errorUI : error ? errorMsg : null;

   return (
      <>
         <Filter
            query={query}
            setQuery={setQuery}
            countries={countries}
            setNoResults={setNoResults}
            setCurrentMax={setCurrentMax}
            setFilteredCountries={setFilteredCountries}
         />
         {hud ? (
            hud
         ) : (
            <ul className='country-list'>
               {countriesToDisplay.map((country) => (
                  <Country
                     alt={country.flags.alt}
                     region={country.region}
                     key={country.name.common}
                     flag={country.flags.svg}
                     capital={country.capital}
                     name={country.name.common}
                     population={country.population}
                  />
               ))}
            </ul>
         )}
         <BackToTop />
         {!noResults && currentMax <= filteredCountries.length && (
            <LoadMore loadMore={loadMore} />
         )}
      </>
   );
}

export default Countries;
