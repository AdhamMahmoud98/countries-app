import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CountryListItem } from './CountriesListItem';


interface Props {
    countryList?: any[] //TODO ts error to be fixed with Country[]
}

export const CountriesList = ({countryList} : Props) => {
  return (
    <Box sx={{ flexGrow: 1, margin: '3rem' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {countryList?.map((item, index) => {
          return (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <CountryListItem CountryItem={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};