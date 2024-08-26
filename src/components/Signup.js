import React from 'react';
import '../css/style.css';
import '../css/sweetalert.css';
import '../css/atlantis.min.css';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {API_URL} from '../auth/constants';
import bg_doctora from '../images/bg_doctora.png';

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          password
        })
      });

      if (response.ok) {
        console.log("User created successfully");
        setErrorResponse("");

        goTo("/Login");
      } else {
        const json = await response.json();
        setErrorResponse(json.body.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setErrorResponse("Network error occurred");
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/AppointmentScheduling" />;
  }
  return (
  
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
  <title>Registrate</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/sweetalert.css" />
  <div className="contenedor">
    <div className="img">
      <img src= {bg_doctora} alt="" />
    </div>
    <div className="contenido-login">
      <form className="form" id="formulario_registro" onSubmit={handleSubmit} >
        <img src="assets/img/logo.png" alt=""/>
        <h2>Registrate</h2>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div> }
        <div className="input-div nit">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
              name="name" required placeholder="Nombre" />
          </div>
        </div>
        <div className="input-div nit">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} name="email" required placeholder="Correo" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required placeholder="Contraseña"  />
          </div>
        </div>
        <div className="row" id="load" hidden="hidden">
          <div className="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
            <img src="assets/img/load.gif" width="100%" alt="" />
          </div>
          <div className="col-xs-12 center text-accent">
            <span>Validando información...</span>
          </div>
        </div>
        <input type="submit" name="button" id="registro" className="btn" value="Registrate" />
      </form>
    </div>
  </div>
  {/* Js personalizado */}
</div>
  )
}
