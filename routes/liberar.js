// Liberar una camioneta
router.post('/liberar/:id', async (req, res) => {
    try {
      const camioneta = await Camioneta.findById(req.params.id);
      camioneta.disponible = true;
      await camioneta.save();
  
      res.status(200).json({ message: 'Camioneta liberada', camioneta });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  