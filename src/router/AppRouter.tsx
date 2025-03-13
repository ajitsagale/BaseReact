import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import { Button } from '@mui/material';
// import { authRoutes } from './authRoutes';

import logo from '../logo.svg';
import '../App.css';
import { authRoutes } from './authRoutes';

const AppRouter: React.FC = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </header> */}
        <Routes>
          {authRoutes}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;