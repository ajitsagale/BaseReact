import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import { authRoutes } from './authRoutes';

const AppRouter: React.FC = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Router>
      <Routes>
        {authRoutes}
      </Routes>
    </Router>
  );
};

export default AppRouter;