import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';

export default function RegistrarUsuario() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [fecha_agendamiento, setFechaAgendamiento] = useState("");
  const [motivo_consulta, setMotivoConsulta] = useState("");
  const [rol, setRol] = useState([]);
  const [rolSelect, setRolSelect] = useState("user");

  useEffect(() => {
    setRol(['user', 'administrador']);
  }, []);

  const save = async (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
      telefono,
      genero,
      fecha_nacimiento,
      fecha_agendamiento,
      motivo_consulta,
      rol: rolSelect
    };

    if (name === "") {
      Swal.fire({
        icon: 'error',
        title: "Debe escribir un nombre",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      try {
        const token = sessionStorage.getItem('token');
        const respuesta = await Axios.post('/persona/crear', user, {
          headers: { 'autorizacion': token }
        });

        const mensaje = respuesta.data.mensaje;
        Swal.fire({
          icon: 'success',
          title: mensaje,
          showConfirmButton: false,
          timer: 1500
        });

        // Limpiar los campos después de guardar
        e.target.reset();
        setName("");
        setUsername("");
        setTelefono("");
        setGenero("");
        setFechaNacimiento("");
        setFechaAgendamiento("");
        setMotivoConsulta("");
        setRolSelect("user");
      } catch (error) {
        console.error("Error al guardar el usuario:", error);
        Swal.fire({
          icon: 'error',
          title: "Error al guardar el usuario",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7 mx-auto">
          <div className="card">
            <div className="container text-center my-3">
              <i className="fas fa-user-plus fa-3x"></i>
            </div>
            <div className="card-header bg-dark text-center">
              <h4 className="text-white bg-dark"><strong>Registrar paciente</strong></h4>
            </div>
            <div className="card-body">
              <form onSubmit={save}>
                <div className="row">
                  <div className="col-lg-">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className="col-lg-">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                  </div>

                  <div className="col-lg-">
                    <label>Teléfono</label>
                    <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} />
                  </div>

                  <div className="col-lg-">
                    <label>Género</label>
                    <select className="form-control" onChange={(e) => setGenero(e.target.value)}>
                      <option value="">Selecciona tu género</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="col-lg-">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" className="form-control" onChange={(e) => setFechaNacimiento(e.target.value)} />
                  </div>

                  <div className="col-lg-">
                    <label>Fecha de Agendamiento</label>
                    <input type="date" className="form-control" onChange={(e) => setFechaAgendamiento(e.target.value)} />
                  </div>

                  <div className="col-md-12">
                    <label>Motivo de la Consulta</label>
                    <textarea className="form-control" onChange={(e) => setMotivoConsulta(e.target.value)}></textarea>
                  </div>

                  <div className="col-lg-">
                    <label>Rol</label>
                    <select className="form-control" value={rolSelect} onChange={(e) => setRolSelect(e.target.value)}>
                      {rol.map((r, index) => (
                        <option key={index} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-outline-info mt-3 d-flex align-items-center justify-content-center">
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
