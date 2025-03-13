import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import dashboardReducer from '../features/dashboard/store/dashboardSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;