import { createContext } from 'react';

const CountryContext = createContext({
   countryList: [],
   loadingState: false,
   errorState: false,
});

export default CountryContext;
