// Crear una reserva
router.post('/reservar/:id', async (req, res) => {
    try {
      const camioneta = await Camioneta.findById(req.params.id);
      if (!camioneta.disponible) {
        return res.status(400).json({ message: 'Camioneta no disponible' });
      }
  
      const nuevaReserva = {
        usuario: req.body.usuario,
        fechaInicio: new Date(req.body.fechaInicio),
        fechaFin: new Date(req.body.fechaFin)
      };
  
      camioneta.reservas.push(nuevaReserva);
      camioneta.disponible = false; // Marcamos la camioneta como no disponible
      await camioneta.save();
  
      res.status(200).json({ message: 'Reserva exitosa', camioneta });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  