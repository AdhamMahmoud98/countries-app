import React, { SetStateAction, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

interface Props {
    darkMode: boolean
    onChangeRegion: (arg0: SetStateAction<string[]>) => void
}

export const DropDownMenu = ({ darkMode, onChangeRegion }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event : any) => {
    setSelectedRegion(event.target.value);
    onChangeRegion(event.target.value)
  };

  const selectStyles = {
    m: 1,
    width: "15rem",
    zIndex: 3,
    marginRight: isMobile ? 0 : "4.5rem",
    ...(darkMode
      ? { 
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          "& .MuiSelect-select": {
            color: theme.palette.text.primary,
          },
        }
      : {}),
  };

  return (
    <FormControl sx={selectStyles}>
      <Select
        value={selectedRegion}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: darkMode ? '#2B3844' : '#ffffff',
                color: theme.palette.text.primary,
              },
            },
          }}
      >
        <MenuItem value=""> 
          <em>Select a Region</em>
        </MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};