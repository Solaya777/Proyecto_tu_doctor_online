import React from "react";
import '../css/style.css';
import '../css/sweetalert.css';
import '../css/bootstrap.min.css';
import '../css/atlantis.min.css';
import Bg from '../images/bg.svg';
import prueba from '../images/calendar-icon.png';
export default function Content() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
  <title>Login</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="assets/css/css/all.min.css" />
  <link rel="icon" href="assets/img/logo.png" type="image/x-icon" />
  <div className="contenedor">
    <div className="img">
      <img src={Bg} alt="" />
    </div>
    <div className="contenido-login">
      <form autoComplete="off" method="POST">
        <img src="../../public/dist/img/imagen_doctor.png" alt="" />
        <h2>Login</h2>
        <div className="input-div nit">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="text" name="usuario" autoComplete="off" placeholder="USUARIO" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <input type="password" required="true" name="clave" placeholder="CONTRASEÑA" />
          </div>
        </div>
        <div className="row" id="load" hidden="hidden">
          <div className="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
            <img src="../../public/dist/img/photo1.png" width="100%" alt="" />
          </div>
          <div className="col-xs-12 center text-accent">
            <span>Validando información...</span>
          </div>
        </div>
        <button className="btn" name="login" type="submit"> Iniciar sesión </button>
      </form>
      <div id="msg_error" className="alert alert-danger" role="alert" style={{display: 'none'}} />
    </div>
  </div>
</div>
  );
}
