export interface Country {
  name?: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population?: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  flags?: {
    svg?: string;
    png?: string;
  };
  currencies?: Currency[];
  languages?: Language[];
  translations?: { [languageCode: string]: string };
  flag?: string;
  regionalBlocs?: RegionalBloc[];
  cioc?: string;
  independent?: boolean;
}

export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
}

export interface RegionalBloc {
  acronym?: string;
  name?: string;
}
