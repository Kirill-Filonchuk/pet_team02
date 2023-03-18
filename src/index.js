import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
