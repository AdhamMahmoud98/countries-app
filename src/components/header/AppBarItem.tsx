import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface Props {
  darkMode: boolean
  onToggleDarkMode: () => void
}


export const AppBarItem = ({ darkMode, onToggleDarkMode }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the World?
          </Typography>
          <Button variant="text" color='inherit' startIcon={darkMode ? <LightModeIcon /> : <DarkModeIcon />} onClick={onToggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
