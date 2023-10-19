import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './Components/ServicioCustomers';
import Global from './Components/Global';
import BuscadorCustomer from './Components/BuscadorCustomer';
import BuscarCoche from './Components/BuscarCoche';
import DepartamentosEmpleados from './Components/DepartamentosEmpleados';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DepartamentosEmpleados />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
