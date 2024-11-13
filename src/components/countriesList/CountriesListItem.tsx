import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Country } from "../../data/types";
import { Link } from 'react-router-dom';

interface Props {
  CountryItem: Partial<Country>;
}

export const CountryListItem = ({ CountryItem }: Props) => {
  return (
    <Link 
      to={`/country/${CountryItem.name}`} 
      state={{ country: CountryItem }} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 10,
          boxShadow: 10,
          height: "100%",
          marginInline: "1.5rem",
        }}
      >
        <img
          src={CountryItem.flag}
          alt={CountryItem.name}
          width="100%"
          height="50%"
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
        <Typography variant="h5">{CountryItem.name}</Typography>
        <Typography variant="body1">
          Population: {CountryItem.population}
        </Typography>
        <Typography variant="body1">Region: {CountryItem.region}</Typography>
        <Typography variant="body1">Capital: {CountryItem.capital}</Typography>
      </Box>
    </Link>
  );
};
