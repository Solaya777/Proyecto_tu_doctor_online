const mongoose = require('mongoose');

const informacionSchema = new mongoose.Schema({
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Cambiado a ObjectId y referencia al modelo User
  telefono: { type: Number, required: true },
  genero: { type: String, enum: ['masculino', 'femenino'], required: true },
  fecha_nacimiento: { type: Date, required: true },
  fecha_agendamiento: { type: Date, required: true },
  motivo_consulta: { type: String, required: true }, // Corregido 'requried' a 'required'
  name: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Informacion', informacionSchema);
