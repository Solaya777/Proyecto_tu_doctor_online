import React, { useState, useEffect } from "react";
import "../css/Form.css";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";
import PortalLayout from "../layout/PortalLayout";

export const AppointmentScheduling = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const auth = useAuth();
  const user = auth.getUser();

  useEffect(() => {
    loadTodos();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await createTodo();
  }

  async function createTodo() {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        const data = await response.json();
        setTodos((prevTodos) => [...prevTodos, data]);
        setTitle(""); // Limpiar el campo de entrada después de agregar
      } else {
        console.error('Error al crear todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear todo:', error);
    }
  }

  async function loadTodos() {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        console.error('Error al cargar todos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar todos:', error);
    }
  }

  return (
    <PortalLayout>
    <div className="form-container">
      <h2>Formulario de Cita Médica</h2>
      <form onSubmit={handleSubmit}>
        <h1>Bienvenido {user?.name || ""}</h1>
        {todos.map((todo) => (
          <div key={todo._id}>{todo.title}</div> 
        ))}

        <input
          type="text"
          placeholder="Nuevo todo..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required />

        <label htmlFor="genero">Género:</label>
        <select id="genero" name="genero" required>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required />

        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fecha-nacimiento"
          name="fecha-nacimiento"
          required
        />

        <label htmlFor="fecha-cita">Fecha de Agendamiento de Cita:</label>
        <input type="date" id="fecha-cita" name="fecha-cita" required />

        <label htmlFor="motivo">Motivo de Consulta:</label>
        <textarea id="motivo" name="motivo" rows="4" required></textarea>

        <button type="submit">Agendar Cita</button>
      </form>
    </div>
    </PortalLayout>
  );
};
