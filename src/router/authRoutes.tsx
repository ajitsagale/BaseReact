import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    {/* Add more auth-related routes here */}
  </>
);