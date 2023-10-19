import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { Arrow, Search, Clear } from '../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

function Countries() {
   const [query, setQuery] = useState('');
   const [error, setError] = useState(false);
   const [noResults, setNoResults] = useState(false); // [1]
   const [loading, setLoading] = useState(false);
   const [expanded, setExpanded] = useState(false);
   const [countries, setCountries] = useState([]);
   const [filteredCountries, setFilteredCountries] = useState([]);
   const [activeRegion, setActiveRegion] = useState('Filter by region');
   const countryPerPage = 12;
   const filterButtons = [
      { name: 'All', code: 'all' },
      { name: 'Africa', code: 'africa' },
      { name: 'Americas', code: 'americas' },
      { name: 'Asia', code: 'asia' },
      { name: 'Europe', code: 'europe' },
      { name: 'Oceania', code: 'oceania' },
      { name: 'Antarctic', code: 'antarctic' },
   ];

   const getCountries = async () => {
      setLoading(true);
      try {
         const response = await fetch('https://restcountries.com/v3.1/all');
         const data = await response.json();
         if (response.ok) {
            setCountries(data);
            setFilteredCountries(data);
            setLoading(false);
            console.log(data);
         }
      } catch (error) {
         console.error(error);
         setError(true);
      }
   };

   const filterByRegion = (selected) => {
      console.log(selected);
      filterButtons.map((button) => {
         if (selected === 'All') {
            setActiveRegion('Filter by region');
         } else if (button.name === selected) {
            setActiveRegion(button.name);
         }
         return button;
      });

      const filteredRegion = countries.filter(
         (country) => country.region === selected
      );
      if (selected === 'All') {
         setFilteredCountries(countries);
      } else {
         setFilteredCountries(filteredRegion);
      }
      console.log(filteredRegion);
      setExpanded(false);
   };

   useEffect(() => {
      const Search = (query) => {
         const queryLower = query.toLowerCase();
         const queryTrimmed = queryLower.trim();
         if (queryTrimmed === '') {
            setFilteredCountries(countries);
            return;
         }
         
         const searched = countries.filter((country) => {
            const name = country.name.common.toLowerCase();
            const capital = country.capital?.[0].toLowerCase();
            const region = country.region.toLowerCase();
            const subregion = country.subregion?.toLowerCase();
            const nativeName = country.name.nativeName?.common?.toLowerCase();
            return (
               name?.includes(queryLower) ||
               capital?.includes(queryLower) ||
               region?.includes(queryLower) ||
               subregion?.includes(queryLower) ||
               nativeName?.includes(queryLower)
            );
         });
         setFilteredCountries(searched);
         if (queryTrimmed !== '' &&  searched.length === 0) {
            setNoResults(true);
         } else {
            setNoResults(false);
         }
      };

      Search(query);
      return () => {};
   }, [query, countries]);

   useEffect(() => {
      getCountries();
      return () => {};
   }, []);

   const loader = (
      <div className='min-h-[60vh] grid place-content-center'>
         <h1 className='text-DarkBlue dark:text-white'>loading...</h1>
      </div>
   );

   const results = (
      <div className='flex flex-wrap justify-center gap-1'>
         <h1 className='text-DarkBlue dark:text-white text-lg'>{`No results found for`}</h1>
         <span className='text-DarkBlue dark:text-white text-lg font-bold px-1 border h-fit rounded-md'>{`"${query}"`}</span>
      </div>
   );

   const hud = loading ? loader : noResults ? results : null;


   return (
      <>
         <div className='flex flex-col gap-5 lg:flex-row md:justify-between mt-5'>
            <label
               htmlFor='search'
               className='md:w-[450px] h-fit flex items-center py-5 px-6 rounded-md shadow-md dark:bg-DarkBlue dark:text-white transition duration-300'
            >
               <Search aria-hidden='true' />
               <input
                  id='search'
                  type='text'
                  value={query}
                  autoComplete='off'
                  placeholder='Search for a country...'
                  onChange={(e) => setQuery(e.target.value)}
                  className='w-full h-fit bg-transparent placeholder:text-sm placeholder:text-DarkBlue dark:placeholder:text-White px-4 border-none outline-none transition duration-300'
               />
               {query && (
                  <button className='' onClick={() => setQuery('')}>
                     <span className='sr-only'>clear input</span>
                     <Clear aria-hidden='true' />
                  </button>
               )}
            </label>
            <div className='relative w-fit'>
               <button
                  className='w-52 justify-between flex items-center gap-8 h-fit py-4 px-6 shadow-md rounded-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition duration-300 stroke-DarkBlue dark:stroke-White'
                  onClick={() => setExpanded(!expanded)}
               >
                  <span>{activeRegion}</span>
                  <span
                     className={`transition duration-300 ${
                        expanded && 'rotate-[180deg]'
                     }`}
                  >
                     <Arrow aria-hidden='true' />
                  </span>
               </button>
               <ul
                  className={`select ${
                     expanded ? 'max-h-auto py-4' : 'max-h-0 py-0'
                  } absolute z-10 overflow-hidden transition-all duration-300 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md bg-White dark:bg-DarkBlue`}
               >
                  {filterButtons.map((region) => (
                     <li key={region.code}>
                        <button
                           className='w-full text-left px-6 hover:bg-LightBg dark:hover:bg-DarkBg text-DarkBg dark:text-White transition duration-300'
                           onClick={() => filterByRegion(region.name)}
                        >
                           {region.name}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {hud ? (
            hud
         ) : (
            <motion.section layout className='countries__grid grid gap-20'>
               <AnimatePresence>
                  {filteredCountries.map((country) => (
                     <CountryCard
                        alt={country.flags.alt}
                        region={country.region}
                        key={country.name.common}
                        flag={country.flags.svg}
                        capital={country.capital}
                        name={country.name.common}
                        population={country.population}
                     />
                  ))}
               </AnimatePresence>
            </motion.section>
         )}
      </>
   );
}

export default Countries;
