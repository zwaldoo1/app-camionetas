// routes/camionetas.js
const express = require('express');
const router = express.Router();
const Camioneta = require('../models/Camioneta');

// Obtener todas las camionetas
router.get('/', async (req, res) => {
  try {
    const camionetas = await Camioneta.find();
    res.json(camionetas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
