import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
const CountryPicker = () => {
  const [fetchedcountries, setFetchedcountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedcountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedcountries]);
  console.log(fetchedcountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedcountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
