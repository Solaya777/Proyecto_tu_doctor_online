import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider'; // Importa solo lo necesario
import App from './App';
import IndexWeb from './components/IndexWeb';
import IndexWeb2 from './components/IndexWeb2';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AppointmentScheduling } from './components/AppointmentScheduling';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import RegistrarUsuario from './components/RegistrarUsuario';
import VerCitas from './components/VerCitas';
import DashBoardUsuario from './components/DashBoardUsuario';
//import Adminpanel from './components/Adminpanel';
//import userFrom from './components/UserForm';


// Elimina estas importaciones duplicadas
// import { useContext, createContext, useState } from "react";

const RegistrarUsuarioWithNavbar = () => (
  <>
    <Navbar/>
    <RegistrarUsuario />
  </>
);

const VerCitasWithNavbar =() =>(
  <>
  <Navbar/>
  <VerCitas/>
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <IndexWeb/> }, // Página principal
      { path: "Login", element: <Login/> }, // Página de login
      { path: "Signup", element: <Signup/> }, // Página de registro
      { path: "IndexWeb2", element:<IndexWeb2/>}, //Apartado de la página principal
      { path: "Navbar", element:<Navbar/>},
      { path: "RegistrarUsuario", element: <RegistrarUsuarioWithNavbar /> },
      { path: "VerCitas", element: <VerCitasWithNavbar /> },
      { path: "DashBoardUsuario", element: <DashBoardUsuario /> },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "AppointmentScheduling",
            element: <AppointmentScheduling />,
          },
        ],
      }, // Código para hacer rutas protegidas, que necesiten de un registro para usarse
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

