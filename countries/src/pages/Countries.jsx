import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';

function Countries() {
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
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

   useEffect(() => {
      getCountries();
      return () => {};
   }, []);

   const nations = countries.map((country) => (
      <CountryCard
         key={country.alpha2Code}
         region={country.region}
         flag={country.flags.svg}
         capital={country.capital}
         name={country.name.common}
         population={country.population}
      />
   ));

   const errormsg = <h1>an error occurred</h1>;
   const loader = <h1>loading...</h1>;

   return (
      <>
         <div className='flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between mt-5'>
            <input
               type='text'
               placeholder='search for a country...'
               className='h-fit p-4 rounded-md shadow-md outline-0 dark:bg-DarkBlue dark:text-white transition-colors duration-300'
            />
            <button className='h-fit p-4 shadow-sm rounded-md bg-White dark:bg-DarkBlue transition-colors duration-300'>
               Filter by region
            </button>
         </div>
         <section className='countries__grid grid gap-16'>{nations}</section>
      </>
   );
}

export default Countries;
