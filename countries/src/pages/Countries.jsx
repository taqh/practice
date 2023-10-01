import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { Arrow, Search, Clear } from '../components/Icons';

function Countries() {
   const [query, setQuery] = useState('');
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [expanded, setExpanded] = useState(false);
   const [countries, setCountries] = useState([]);
   const [filteredCountries, setFilteredCountries] = useState([]);
   const [selectedRegion, setSelectedRegion] = useState('Filter by region');
   const countryPerPage = 12;
   const filterButtons = [
      { name: 'All', code: 'all' },
      { name: 'Africa', code: 'africa' },
      { name: 'Americas', code: 'americas' },
      { name: 'Asia', code: 'asia' },
      { name: 'Europe', code: 'europe' },
      { name: 'Oceania', code: 'oceania' },
   ];

   const getCountries = async () => {
      setLoading(true);
      try {
         const response = await fetch('https://restcountries.com/v3.1/all');
         const data = await response.json();
         if (response.ok) {
            setCountries(data);
            setLoading(false);
            console.log(data);
         }
      } catch (error) {
         console.error(error);
         setError(true);
      }
   };

   const filterByRegion = (selected) => {
      filterButtons.map((button) => {
         if (selected === 'all') {
            setSelectedRegion('Filter by region');
         } else if (button.code === selected) {
            setSelectedRegion(button.name);
         }
         return button;
      });
      setExpanded(false);
   };

   const filterByQuery = (query) => {
      const filtered = countries.filter((country) => {
         const queryLower = query.toLowerCase();
         const name = country.name.common.toLowerCase();
         const capital = country.capital?.[0].toLowerCase();
         const region = country.region.toLowerCase();
         const subregion = country.subregion.toLowerCase();
         const currency = country.currencies?.[0].toLowerCase();
         const language = country.languages?.[0].toLowerCase();
         const nativeName = country.name.nativeName?.common.toLowerCase();
         return (
            name.includes(queryLower) ||
            capital.includes(queryLower) ||
            region.includes(queryLower) ||
            subregion.includes(queryLower) ||
            currency.includes(queryLower) ||
            language.includes(queryLower) ||
            nativeName.includes(queryLower)
         );
      });
   };

   useEffect(() => {
      getCountries();
      return () => {};
   }, []);

   const clearQuery = () => {
      setQuery('');
   };

   const nations = countries.map((country) => (
      <CountryCard
         alt={country.flags.alt}
         region={country.region}
         key={country.name.common}
         flag={country.flags.svg}
         capital={country.capital}
         name={country.name.common}
         population={country.population}
      />
   ));

   const loader = (
      <div className='min-h-[60vh] grid place-content-center'>
         <h1 className='text-DarkBlue dark:text-white'>loading...</h1>
      </div>
   );

   return (
      <>
         <div className='flex flex-col gap-5 lg:flex-row md:justify-between mt-5'>
            <label
               htmlFor='search'
               className='md:w-[450px] flex items-center py-5 px-6 rounded-md shadow-md dark:bg-DarkBlue dark:text-white transition duration-300'
            >
               <Search aria-hidden='true' />
               <input
                  id='search'
                  type='text'
                  value={query}
                  autoComplete='off'
                  placeholder='Search for a country...'
                  onChange={(e) => setQuery(e.target.value)}
                  className='w-full h-fit bg-transparent placeholder:text-DarkBlue placeholder:text-sm dark:placeholder:text-White px-4  outline-0 transition-colors duration-300'
               />
               {query && (
                  <button className='' onClick={() => clearQuery()}>
                     <span className='sr-only'>clear input</span>
                     <Clear aria-hidden='true' />
                  </button>
               )}
            </label>
            <div className='relative w-fit'>
               <button
                  className='w-52 justify-between flex items-center gap-8 h-fit py-4 px-6 shadow-md rounded-md bg-White dark:bg-DarkBlue transition-colors duration-300 stroke-DarkBlue dark:stroke-White'
                  onClick={() => setExpanded(!expanded)}
               >
                  <span>{selectedRegion}</span>
                  <span
                     className={`transition duration-200 ${
                        expanded && 'rotate-[180deg]'
                     }`}
                  >
                     <Arrow aria-hidden='true' />
                  </span>
               </button>
               <ul
                  className={`select ${
                     expanded ? 'max-h-auto py-4' : 'max-h-0 py-0'
                  } absolute z-10 overflow-hidden transition-all duration-200 w-full right-0 top-[3.8rem] flex flex-col gap-2 shadow-md rounded-md bg-White dark:bg-DarkBlue`}
               >
                  {filterButtons.map((region) => (
                     <li key={region.code}>
                        <button
                           className='w-full text-left px-6 hover:bg-LightBg dark:hover:bg-DarkBg transition-colors duration-200'
                           onClick={() => filterByRegion(region.code)}
                        >
                           {region.name}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {loading ? (
            loader
         ) : (
            <section className='countries__grid grid gap-20'>{nations}</section>
         )}
      </>
   );
}

export default Countries;
