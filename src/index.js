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
import Departamentos from './Components/MaestroDetalle/Departamentos';
import Empleados from './Components/MaestroDetalle/Empleados'
import TablaMultiplicar from './Components/RutasParametros/TablaMultiplicar';
import NotFound from './Components/RutasParametros/NotFound';
import MenuRutas from './Components/RutasParametros/MenuRutas';
import Router from './Components/Router';
import MenuRutasCollatz from './Components/RutasCollatz/MenuRutasCollatz';
import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BuscarCoche /> */}
    {/* <DepartamentosEmpleados /> */}
    {/* <MenuRutas /> */}
    <Router />
    {/* <MenuRutasCollatz /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
