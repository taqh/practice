import { useState, useEffect } from 'react';
import CountryContext from './CountryContext';

function ChatProvider({ children }) {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      const getCountries = async () => {
         try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            if (response.ok) {
               setCountries(data)
            }
         } catch (error) {
            console.error(error);
         }
      };
      getCountries();
      return () => {};
   },[])
   

   const countryContext = {
      countryList: countries
   };

   return (
      <CountryContext.Provider value={countryContext}>
         {children}
      </CountryContext.Provider>
   );
}

export default ChatProvider;
