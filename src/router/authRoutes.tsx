import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import Dashboard from '../features/dashboard/pages/Dashboard';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route element={<AuthenticatedLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more authenticated routes here */}
    </Route>
  </>
);