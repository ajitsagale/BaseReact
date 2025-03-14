import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import Dashboard from '../features/dashboard/pages/Dashboard';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import Profile from '../features/auth/pages/PorfilePage';

export const authRoutes = (
  <>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route element={<AuthenticatedLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      {/* Add more authenticated routes here */}
    </Route>
  </>
);