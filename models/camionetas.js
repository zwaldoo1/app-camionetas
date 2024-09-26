// models/Camioneta.js
const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuario: String,
  fechaInicio: Date,
  fechaFin: Date
});

const camionetaSchema = new mongoose.Schema({
  nombre: String,
  disponible: Boolean,
  reservas: [reservaSchema]
});

module.exports = mongoose.model('Camioneta', camionetaSchema);
