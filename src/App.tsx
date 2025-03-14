import React from 'react';
import { useThemeContext } from './contexts/ThemeContext';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  const { toggleTheme } = useThemeContext();

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;