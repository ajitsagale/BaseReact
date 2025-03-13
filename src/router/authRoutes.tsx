import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import Dashboard from '../features/dashboard/pages/Dashboard';

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </>
);