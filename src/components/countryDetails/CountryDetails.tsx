import React from "react";
import { Box, Typography, Button, Chip, Grid } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import { Currency, Language } from "../../data/types";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state?.country;

  if (!country) {
    return <Typography>Country details not available.</Typography>;
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
  } = country;

  return (
    <Box padding="2rem">
      <Button variant="text" sx={{ marginBottom: "1rem" }} onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Grid container spacing={4}>
        {/* Flag Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={flag}
            alt={`${name} flag`}
            sx={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>

        {/* Country Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {name}
          </Typography>

          <Grid container spacing={2}>
            {/* Left Column Details */}
            <Grid item xs={12} sm={6}>
              <Typography>
                <strong>Native Name:</strong> {nativeName}
              </Typography>
              <Typography>
                <strong>Population:</strong> {population?.toLocaleString()}
              </Typography>
              <Typography>
                <strong>Region:</strong> {region}
              </Typography>
              <Typography>
                <strong>Sub Region:</strong> {subRegion}
              </Typography>
              <Typography>
                <strong>Capital:</strong> {capital}
              </Typography>
            </Grid>

            {/* Right Column Details */}
            <Grid item xs={12} sm={6}>
              <Typography>
                <strong>Top Level Domain:</strong> {topLevelDomain?.join(", ")}
              </Typography>
              <Typography>
                <strong>Currencies:</strong> {currencies?.map((currency: Currency) => currency.name).join(", ")}
              </Typography>
              <Typography>
                <strong>Languages:</strong> {languages?.map((language: Language) => language.name).join(", ")}
              </Typography>
            </Grid>
          </Grid>

          {/* Border Countries */}
          <Box mt={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Border Countries:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {borderCountries?.map((countryCode: string) => (
                <Chip key={countryCode} label={countryCode} variant="outlined" />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { CountryDetails };
