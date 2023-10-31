import { useState, useEffect } from 'react';
import CountryContext from './CountryContext';

function ChatProvider({ children }) {
   const [countries, setCountries] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const getCountries = async () => {
         setLoading(true);
         try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            if (response.ok) {
               setCountries(data);
               setLoading(false);
            }
         } catch (error) {
            console.error(error);
            setError(true);
         }
      };
      getCountries();
      return () => {};
   },[])
   

   const countryContext = {
      countryList: countries,
      loadingState: loading,
      errorState: error,
   };

   return (
      <CountryContext.Provider value={countryContext}>
         {children}
      </CountryContext.Provider>
   );
}

export default ChatProvider;
