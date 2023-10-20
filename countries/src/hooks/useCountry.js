import { useState } from 'react';

function useCountry () {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getCountries = async (params) => {
        setLoading(true);
        try {
           const response = await fetch(`https://restcountries.com/v3.1/${params}`);
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

    return {
        countries,
        filteredCountries,
        loading,
        error,
        getCountries,
        setCountries,
        setFilteredCountries,
        setLoading,
        setError
    };
}

export default useCountry;