import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProviderComponent } from './contexts/ThemeContext';
import './index.css';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderComponent>
        <AppRouter />
      </ThemeProviderComponent>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();