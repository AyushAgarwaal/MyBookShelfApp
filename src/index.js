import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
// import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.js';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// reportWebVitals();
