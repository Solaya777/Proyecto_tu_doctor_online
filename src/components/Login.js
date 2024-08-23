import React from "react";
import '../css/style.css';
import '../css/sweetalert.css';
import '../css/bootstrap.min.css';
import '../css/atlantis.min.css';
import background from '../images/bg.svg';
import logo from '../images/logo.png';
import photo1 from '../images/coffe-1.jpg';
import wave from '../images/wave.png';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider'
import {Navigate} from 'react';
import {API_URL} from '../auth/constants';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (response.ok) {
            console.log("Login successful");
            const json = await response.json();
            console.log(json); // Verifica el formato del JSON

            if (json.body.accessToken && json.body.refreshToken) {
                auth.saveUser(json.body); // Asegúrate de pasar solo el cuerpo
                goTo("./AppointmentScheduling");
            } else {
                setErrorResponse("Tokens not found in response");
            }
        } else {
            const json = await response.json();
            setErrorResponse(json.body.error || "Unknown error occurred");
        }
    } catch (error) {
        console.error("Error during fetch:", error);
        setErrorResponse("Network error occurred");
    }
}



  if (auth.isAuthenticated){
    return <Navigate to="/AppointmentScheduling"></Navigate>
  }
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
      <title>Login</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="assets/css/css/all.min.css" />
      <link rel="icon" href="assets/img/logo.png" type="image/x-icon" />
      <script src="https://kit.fontawesome.com/a81368914c.js" />

      <div className="contenedor">
        <img className="wave" src={wave} alt="Wave" />
        <div className="img">
          <img src={background} alt="Background" />
        </div>
        <div className="contenido-login">
          <form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <img src={logo} alt="Logo" />
            <h3>Inicia sesión</h3>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div> }
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
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required placeholder="Contraseña" />
              </div>
            </div>
            <div className="row" id="load" hidden>
              <div className="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
                <img src={photo1} width="100%" alt="Loading" />
              </div>
              <div className="col-xs-12 center text-accent">
                <span>Validando información...</span>
              </div>
            </div>
            <button className="btn" type="submit">Iniciar sesión</button>
          </form>
          <div id="msg_error" className="alert alert-danger" role="alert" style={{ display: 'none' }} />
        </div>
      </div>
    </div>
  );
}
