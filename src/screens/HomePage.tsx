import React from "react";
import Box from '@mui/material/Box';
import { DropDownMenu } from "../components/dropdownMenu/DropDownMenu";
import { CountriesList } from "../components/countriesList/CountriesList";
import { useMediaQuery, useTheme } from '@mui/material';
import { useCountriesList } from "../hooks/useCountriesList";
import { SearchBarItem } from "../components/searchBar/searchBarItem";

interface Props {
  darkMode: boolean;
}

export const HomePage: React.FC<Props> = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    countries,
    filteredCountries,
    searchQuery,
    handleSearchChange,
    setSelectedRegions,
  } = useCountriesList();

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
         {/* @ts-ignore */}
        <SearchBarItem searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <DropDownMenu darkMode={darkMode} onChangeRegion={setSelectedRegions} />
      </Box>
      <CountriesList 
        countryList={searchQuery || filteredCountries ? filteredCountries : countries}
      />
    </Box>
  );
};
