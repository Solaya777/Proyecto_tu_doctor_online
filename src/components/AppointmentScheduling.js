import React, { useState, useEffect } from "react";
import "../css/Form.css";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";
import PortalLayout from "../layout/PortalLayout";

export const AppointmentScheduling = () => {
  const [informacion, setInformacion] = useState([]);
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [fecha_nacimiento, setFechanacimiento] = useState("");
  const [fecha_agendamiento, setFechaagendamiento] = useState("");
  const [motivo_consulta, setMotivoconsulta] = useState("");
  const [userName, setUserName] = useState("");

  const auth = useAuth();
  const user = auth.getUser();

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  useEffect(() => {
    loadInformacion();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await createInformacion();
  }

  async function createInformacion() {
    try {
      const response = await fetch(`${API_URL}/informacion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
        body: JSON.stringify({
          idUser: user.id,
          name: user.name,
          telefono,
          genero,
          fecha_nacimiento,
          fecha_agendamiento,
          motivo_consulta,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setInformacion((prevInformacion) => [...prevInformacion, data]);
        // Limpiar los campos después de agregar
        setTelefono("");
        setGenero("");
        setFechanacimiento("");
        setFechaagendamiento("");
        setMotivoconsulta("");
      } else {
        console.error("Error al crear la información:", response.statusText);
      }
    } catch (error) {
      console.error("Error al crear la información:", error);
    }
  }

  async function loadInformacion() {
    try {
      const response = await fetch(`${API_URL}/informacion`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInformacion(data);
      } else {
        console.error("Error al cargar la información:", response.statusText);
      }
    } catch (error) {
      console.error("Error al cargar la información:", error);
    }
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert(
        "Las citas no pueden agendarse en sábados o domingos. Por favor, selecciona un día hábil."
      );
      setFechaagendamiento("");
    } else {
      setFechaagendamiento(e.target.value);
    }
  };

  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const getMinDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 120);
    return today.toISOString().split("T")[0];
  };

  return (
    <PortalLayout>
      <div className="form-container">
        <h2>Formulario de Cita Médica</h2>
        <form onSubmit={handleSubmit}>
          <h1>Bienvenido {user?.name || ""}</h1>

          <div className="form-group">
            <label htmlFor="telefono">Número de celular:</label>
            <input
              id="telefono"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genero">Género:</label>
            <select
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            >
              <option value="">Selecciona tu género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
            <input
              id="fecha_nacimiento"
              type="date"
              value={fecha_nacimiento}
              onChange={(e) => setFechanacimiento(e.target.value)}
              min={getMinDate()} 
              max={getTodayDate()} 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha_agendamiento">
              Día para agendar tu cita:
            </label>
            <input
              id="fecha_agendamiento"
              type="date"
              value={fecha_agendamiento}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo_consulta">Motivo de la consulta:</label>
            <input
              id="motivo_consulta"
              type="text"
              value={motivo_consulta}
              onChange={(e) => setMotivoconsulta(e.target.value)}
              required
            />
          </div>

          <button type="submit">Agendar Cita</button>
        </form>
      </div>
    </PortalLayout>
  );
};
