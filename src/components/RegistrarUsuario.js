import React from 'react';
import {useState} from 'react';

export default function RegistrarUsuario() {
  const [name, setName] = useState("");
  const [last_name, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("");

  return (
    <div className="container mt-4">
  <div className="row">
    <div className="col-md-7 mx-auto">
      <div className="card">
        <div className="container text-center my-3">
          <i className="fas fa-user-plus fa-3x"></i>
        </div>
        <div className="card-header bg-dark text-center">
          <h4 class="text-white bg-dark"><strong>Registrar paciente</strong></h4>
        </div>
        <div className="card-body">
          <form onSubmit={"guardar"}>
            <div className="row">

              <div className="col-md-6">
                <label>Nombre</label>
                <input type="text" className="form-control required" />
              </div>

              <br/>

              <div className="col-md-6">
                <label>Apellido</label>
                <input type="text" className="form-control required" />
              </div>

              <br/>
              
              <div className="col-md-6">
                <label>Telefono</label>
                <input type="text" className="form-control required" />
              </div>

              
              <div className="col-md-6">
                <label>Rol</label>
                <input type="text" className="form-control required" />
              </div>

            </div>

            <button type="submit" className="btn btn-outline-info mt-3 d-flex align-items-center justify-content-center">
              <i></i> Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
