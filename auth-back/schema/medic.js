const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  name: {
    type: String,
    required: true, // El nombre es obligatorio
    trim: true 
  },
  userName: {
    type: String,
    required: true, // El nombre de usuario es obligatorio
    unique: true, // Asegura que cada nombre de usuario sea único
    trim: true
  },
  password: {
    type: String,
    required: true, // La contraseña es obligatoria
    minlength: 6 // Asegura que la contraseña tenga al menos 6 caracteres
  },
  especialidad: {
    type: String,
    enum: ['pediatría', 'odontología', 'medicina general'], // Enumera las especialidades permitidas
    required: true // La especialidad es obligatoria
  }
}, {
  timestamps: true // Añade campos de fecha de creación y actualización
});

// Crear el modelo a partir del esquema
const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
