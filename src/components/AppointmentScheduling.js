import React from 'react';
import '../css/Form.css';

export const AppointmentScheduling = () => {
  return (
    <div className="form-container">
    <h2>Formulario de Cita Médica</h2>
    <form>
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
        <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required />

        <label htmlFor="fecha-cita">Fecha de Agendamiento de Cita:</label>
        <input type="date" id="fecha-cita" name="fecha-cita" required />

        <label htmlFor="motivo">Motivo de Consulta:</label>
        <textarea id="motivo" name="motivo" rows="4" required></textarea>

        <button type="submit">Agendar Cita</button>
    </form>
</div>
  )
}
