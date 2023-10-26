import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { Arrow, Search, Clear } from '../components/Icons';
import { Skeleton } from '../components/Skeleton';
import BackToTop from '../components/BackToTop';

function Countries() {
   const [query, setQuery] = useState('');
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [countries, setCountries] = useState([]);
   const [expanded, setExpanded] = useState(false);
   const [noResults, setNoResults] = useState(false);
   const [filteredCountries, setFilteredCountries] = useState([]);
   const [countriesToDisplay, setCountriesToDisplay] = useState(12);
   const [activeRegion, setActiveRegion] = useState('Filter by region');
   const displayedCountries = filteredCountries.slice(0, countriesToDisplay);
   const regions = [
      { name: 'All', code: 'all' },
      { name: 'Africa', code: 'africa' },
      { name: 'Americas', code: 'americas' },
      { name: 'Asia', code: 'asia' },
      { name: 'Europe', code: 'europe' },
      { name: 'Oceania', code: 'oceania' },
      { name: 'Antarctic', code: 'antarctic' },
   ];
   const dummyList = new Array(12).fill(null);

   useEffect(() => {
      const getCountries = async () => {
         setLoading(true);
         try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            if (response.ok) {
               setCountries(data);
               setFilteredCountries(data);
               setTimeout(() => {
                  setLoading(false);
               }, 1000);
               console.log(data);
            }
         } catch (error) {
            console.error(error);
            setError(true);
         }
      };
      getCountries();
      return () => {};
   }, []);

   const loadMore = () => {
      setCountriesToDisplay(countriesToDisplay + 12);
      console.log(countriesToDisplay);
   };

   const filterByRegion = (selected) => {
      // reset amount of countries displayed each time user changes region
      setCountriesToDisplay(() => 12);

      console.log(selected);
      regions.map((region) => {
         if (selected === 'All') {
            setActiveRegion('Filter by region');
         } else if (region.name === selected) {
            setActiveRegion(region.name);
         }
         return region;
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

   // enable user collapse filter list by pressing the 'esc' key
   useEffect(() => {
      const handleEscape = (e) => {
         if (e.key === 'Escape') {
            setExpanded(false);
         }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
         window.removeEventListener('keydown', handleEscape);
      };
   }, []);

   useEffect(() => {
      const Search = (query) => {
         const queryLower = query.toLowerCase();
         const queryTrimmed = queryLower.trim();
         const queryEmpty = queryTrimmed === '';
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

         if (!queryEmpty && searched.length === 0) {
            setNoResults(true);
         } else {
            setNoResults(false);
         }
      };

      Search(query);
      
      return () => {};
   }, [query, countries]);

   const clearInput = () => {
      setQuery('');
      setNoResults(false);
   };

   const errorUI = (
      <div className='flex flex-wrap justify-center gap-1'>
         <h1 className='text-DarkBlue dark:text-white text-lg'>{`No results found for`}</h1>
         <span className='text-DarkBlue dark:text-white text-lg font-bold px-1 border dark:border-White border-DarkBlue h-fit rounded-md'>{`"${query}"`}</span>
      </div>
   );

   const loader = (
      <div className='countries__grid grid gap-16'>
         {dummyList.map((_, index) => (
            <Skeleton key={index} />
         ))}
      </div>
   );

   const errorMsg = (
      <div className='flex flex-wrap justify-center gap-1'>
         <h1 className='text-DarkBlue dark:text-white'>
            An error occured please{' '}
         </h1>
         <button className='w-fit h-fit py-2 px-6 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300 '>
            Try again
         </button>
      </div>
   );

   const hud = loading ? loader : noResults ? errorUI : error ? errorMsg : null;

   return (
      <>
         <div className='flex flex-col gap-7 lg:flex-row md:justify-between mt-5'>
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
                  <button onClick={() => clearInput()}>
                     <span className='sr-only'>clear input</span>
                     <Clear aria-hidden='true' />
                  </button>
               )}
            </label>
            <div className='relative w-fit'>
               <button
                  className='w-52 justify-between flex items-center gap-8 h-fit py-4 px-6 shadow-md rounded-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White focus-within:outline-DarkBlue dark:focus-within:outline-White transition duration-300 stroke-DarkBlue dark:stroke-White'
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
                  className={`select px-2 ${
                     expanded ? 'max-h-auto  py-2' : 'max-h-0 py-0'
                  } absolute z-10 overflow-hidden transition-all duration-300 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md bg-White dark:bg-DarkBlue`}
               >
                  {regions.map((region) => (
                     <li key={region.name}>
                        <button
                           className='w-full text-left px-4 hover:bg-LightBg dark:hover:bg-DarkBg text-DarkBg dark:text-White focus-within:outline-DarkBlue dark:focus-within:outline-White transition duration-300'
                           onClick={() => filterByRegion(region.name)}
                           tabIndex={expanded ? '0' : '-1'} // prevent the buttons from being focusable when list is collapsed
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
            <section className='countries__grid grid gap-16'>
               {displayedCountries.map((country) => (
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
            </section>
         )}
         <BackToTop />
         {!noResults && countriesToDisplay <= filteredCountries.length && (
            <div className='flex justify-center'>
               <button
                  className='self-center w-fit h-fit py-2 px-6 mt-6 rounded-md shadow-md bg-White dark:bg-DarkBlue text-DarkBg dark:text-White focus-within:outline-DarkBlue dark:focus-within:outline-White transition-colors duration-300'
                  onClick={() => loadMore()}
               >
                  Load More
               </button>
            </div>
         )}
      </>
   );
}

export default Countries;
