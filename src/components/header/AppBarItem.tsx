import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import './AppBar.css'; // Import the CSS file

interface Props {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const AppBarItem = ({ darkMode, onToggleDarkMode }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" className={`app-bar-title ${isMobile ? 'mobile-title' : ''}`}>
            Where in the World?
          </Typography>
          <Button variant="text" color='inherit' onClick={onToggleDarkMode}>
            {darkMode ? (
              <LightModeIcon className={`icon ${isMobile ? 'mobile-icon' : ''}`} />
            ) : (
              <DarkModeIcon className={`icon ${isMobile ? 'mobile-icon' : ''}`} />
            )}
            <Typography variant="button" className={`button-text ${isMobile ? 'mobile-text' : ''}`}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};