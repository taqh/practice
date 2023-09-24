import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import { Arrow, Search } from '../components/Icons';

function Countries() {
   const [error, setError] = useState(false);
   const [expand, setExpand] = useState(false)
   const [loading, setLoading] = useState(false);
   // const [region, setRegion] = useState([]);
   const [countries, setCountries] = useState([]);


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

   const filterRegion = (region) => {
      let selectedRegion = []
      countries.filter((country) => {
         if(country.region.toLowerCase() === region) {
            selectedRegion.push(country) // destructive method, will change later 
         }
      })
      console.log(selectedRegion);
      setExpand(false);
   }

   useEffect(() => {
      getCountries();
      return () => {};
   }, []);

   const nations = countries.map((country) => (
      <CountryCard
         alt={country.flags.alt}
         region={country.region}
         key={country.alpha2Code}
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
         <div className='flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between mt-5 '>
            <input
               type='text'
               placeholder='search for a country...'
               className='md:w-[460px] h-fit placeholder:text-DarkBlue dark:placeholder:text-White p-4 rounded-md shadow-md outline-0 dark:bg-DarkBlue dark:text-white transition-colors duration-300'
            />
            {/* <Search /> */}
            <div className='relative w-fit'>
               <button className='w-fit flex items-center gap-8 h-fit py-4 px-6 shadow-md rounded-md bg-White dark:bg-DarkBlue transition-colors duration-300 stroke-DarkBlue dark:stroke-White' onClick={() => setExpand(!expand)}>
                  <span>Filter by region</span>
                  <Arrow />
               </button>
               <ul className={`select ${expand ? 'absolute' : 'hidden'} px-6 py-4 w-full right-0 top-[4rem] bg-White dark:bg-DarkBlue flex flex-col gap-2 shadow-md rounded-md z-10`}>
                  <li><button onClick={() => filterRegion('all')}>All</button></li>
                  <li><button onClick={() => filterRegion('africa')}>Africa</button></li>
                  <li><button onClick={() => filterRegion('americas')}>America</button></li>
                  <li><button onClick={() => filterRegion('asia')}>Asia</button></li>
                  <li><button onClick={() => filterRegion('europe')}>Europe</button></li>
                  <li><button onClick={() => filterRegion('oceania')}>Oceania</button></li>
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
