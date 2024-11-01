import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { AppBarItem } from "./components/header/AppBarItem";
import { SearchBarItem } from "./components/searchBar/searchBarItem";

export default function App() {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#F2F2F2"
      },
      text: {
        primary: "#000000"
      }
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    }
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#202C36"
      },
      text: {
        primary: "#ffffff"
      }
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    }
  });

  return (
    <ThemeProvider theme={toggleDarkMode ? themeDark : themeLight}>
      <CssBaseline />
      <AppBarItem darkMode={toggleDarkMode} onToggleDarkMode={toggleDarkTheme} />
      <SearchBarItem />
    </ThemeProvider>
  )
}