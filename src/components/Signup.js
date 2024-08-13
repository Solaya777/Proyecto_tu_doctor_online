import React from 'react';
import '../css/style.css';
import '../css/sweetalert.css';
import '../css/bootstrap.min.css';
import '../css/atlantis.min.css';

export const Signup = () => {
  return (
  
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
  <title>Registrate</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/sweetalert.css" />
  {/*  <img class="wave"src="../assets/img/wave.png" alt="">  */}
  <div className="contenedor">
    <div className="img">
      <img src="assets/img/bg.svg" alt="" />
    </div>
    <div className="contenido-login">
      <form id="formulario_registro">
        <img src="assets/img/logo.png" alt=""/>
        <h2>Registrate</h2>
        <div className="input-div nit">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="email" name="name" required placeholder="NOMBRE" />
          </div>
        </div>
        <div className="input-div nit">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="email" name="email" required placeholder="CORREO" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <input type="password" placeholder="CONTRASEÑA" name="clave" required />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <input type="password" placeholder="CONFIRMAR CONTRASEÑA" name="clave2" required />
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
        <input type="button" name="button" id="registro" className="btn" defaultValue="Registrate" />
      </form>
    </div>
  </div>
  {/* Js personalizado */}
</div>
  )
}
