import { useEffect, useState } from 'react';
import { Arrow, Search, Clear } from './ui/Icons';

function Filter({ query, setQuery, setCurrentMax, countries, setFilteredCountries, setNoResults,}) {
   
   const maxCountries = 12;
   const [expanded, setExpanded] = useState(false);
   const [activeRegion, setActiveRegion] = useState('Filter by region');
   const regions = [
      { name: 'All', code: 'all' },
      { name: 'Africa', code: 'africa' },
      { name: 'Americas', code: 'americas' },
      { name: 'Asia', code: 'asia' },
      { name: 'Europe', code: 'europe' },
      { name: 'Oceania', code: 'oceania' },
      { name: 'Antarctic', code: 'antarctic' },
   ];

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

      setActiveRegion('Filter by region'); // temporary fix for an issue where the actve region doesn't match displayed countries after user clears query

      Search(query);
   }, [query, countries]);

   const clearInput = () => {
      setQuery('');
      setNoResults(false);
   };

   const filterByRegion = (selected) => {
      setCurrentMax(() => maxCountries); // reset amount of countries displayed each time user changes region

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

   // enable user collapse filter list by clicking the outside of the list
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (e.target.closest('.select') === null) {
            setExpanded(false);
         }
      };
      window.addEventListener('click', handleClickOutside);
      return () => {
         window.removeEventListener('click', handleClickOutside);
      };
   }, []);

   return (
      <div className='flex flex-col gap-8 lg:flex-row md:justify-between mt-5'>
         <label
            htmlFor='search'
            className='md:w-[470px] h-fit flex items-center py-5 px-6 rounded-md shadow-md dark:bg-DarkBlue dark:text-white transition duration-300'
         >
            <Search aria-hidden='true' />
            <input
               id='search'
               type='text'
               value={query}
               autoComplete='off'
               placeholder='Search for a country...'
               onChange={(e) => setQuery(e.target.value)}
               className='w-full h-fit bg-transparent placeholder:text-sm placeholder:text-LightInput dark:placeholder:text-White px-4 border-none outline-none transition duration-300'
            />
            {query && (
               <button onClick={() => clearInput()}>
                  <span className='sr-only'>clear input</span>
                  <Clear aria-hidden='true' />
               </button>
            )}
         </label>
         <div className='select relative w-fit'>
            <button
               className='whitespace-nowrap w-52 justify-between flex items-center h-fit py-4 px-6 shadow-md rounded-md bg-White dark:bg-DarkBlue text-TxtLight dark:text-White focus-visible:outline-DarkBlue dark:focus-visible:outline-White transition duration-300 stroke-DarkBlue dark:stroke-White'
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
                  expanded
                     ? 'max-h-auto  py-2 opacity-100'
                     : 'max-h-0 py-0 opacity-0'
               } absolute z-10 overflow-hidden transition-all duration-300 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md bg-White dark:bg-DarkBlue`}
            >
               {regions.map((region) => (
                  <li key={region.name}>
                     <button
                        className='w-full text-left px-4 hover:bg-LightBg dark:hover:bg-DarkBg text-TxtLight dark:text-White focus-visbile:outline-DarkBlue dark:focus-visible:outline-White transition duration-300'
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
   );
}

export default Filter;
