import { useState, useEffect } from 'react';
import CountryListData from '../data/data.json';
import { Country } from '../data/types';


export const useCountriesList = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  useEffect(() => {
    setCountries(CountryListData);
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country?.name?.toLowerCase().includes(searchQuery?.toLowerCase()) &&
      (selectedRegions?.length === 0 || selectedRegions?.includes(country.region))
    );
    setFilteredCountries(filtered);
  }, [countries, searchQuery, selectedRegions]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return {
    countries,
    filteredCountries,
    searchQuery,
    selectedRegions,
    handleSearchChange,
    setSelectedRegions,
  };
};