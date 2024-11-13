import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import "./SearchBar.css";

interface Props {
  onSearchChange: () => void;
}

export const SearchBarItem = ({ onSearchChange }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-start",
        marginLeft: isMobile ? 0 : "4.5rem",
        width: isMobile ? '100%' : "380px",
        alignSelf: 'center'
      }}
    >
      <TextField
        sx={{
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          elevation: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        id="input-with-icon-textfield"
        placeholder="Search for a country.."
        variant="outlined"
        className={isMobile ? "mobile-search-bar" : "desktop-search-bar"}
        onChange={onSearchChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};
