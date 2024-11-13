import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountryDetails } from '../../components/countryDetails/CountryDetails';

const mockCountryData =  {
        "name": "Afghanistan",
        "topLevelDomain": [".af"],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": ["93"],
        "capital": "Kabul",
        "altSpellings": ["AF", "Afġānistān"],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 40218234,
        "latlng": [33, 65],
        "demonym": "Afghan",
        "area": 652230,
        "timezones": ["UTC+04:30"],
        "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "flags": {
          "svg": "https://flagcdn.com/af.svg",
          "png": "https://flagcdn.com/w320/af.png"
        },
        "currencies": [
          {
            "code": "AFN",
            "name": "Afghan afghani",
            "symbol": "؋"
          }
        ],
        "languages": [
          {
            "iso639_1": "ps",
            "iso639_2": "pus",
            "name": "Pashto",
            "nativeName": "پښتو"
          },
          {
            "iso639_1": "uz",
            "iso639_2": "uzb",
            "name": "Uzbek",
            "nativeName": "Oʻzbek"
          },
          {
            "iso639_1": "tk",
            "iso639_2": "tuk",
            "name": "Turkmen",
            "nativeName": "Türkmen"
          }
        ],
        "translations": {
          "br": "Afghanistan",
          "pt": "Afeganistão",
          "nl": "Afghanistan",
          "hr": "Afganistan",
          "fa": "افغانستان",
          "de": "Afghanistan",
          "es": "Afganistán",
          "fr": "Afghanistan",
          "ja": "アフガニスタン",
          "it": "Afghanistan",
          "hu": "Afganisztán"
        },
        "flag": "https://flagcdn.com/af.svg",
        "regionalBlocs": [
          {
            "acronym": "SAARC",
            "name": "South Asian Association for Regional Cooperation"
          }
        ],
        "cioc": "AFG",
        "independent": true
};


test('renders country details', () => {
    render(<CountryDetails />);
    expect(screen.getByText(/Belgium/i)).toBeInTheDocument();
    expect(screen.getByText(/Europe/i)).toBeInTheDocument();
    expect(screen.getByText(/11319511/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Belgium flag/i)).toBeInTheDocument();
  });
  