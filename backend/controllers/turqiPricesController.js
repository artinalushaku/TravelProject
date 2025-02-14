const TurqiPrices = require('../models/TurqiPrices');

// Get all Turqi prices
const getAllTurqiPrices = async (req, res) => {
  try {
    const turqiPrices = await TurqiPrices.findAll();
    res.json(turqiPrices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new Turqi price
const addTurqiPrice = async (req, res) => {
  const { room_type, service, price_1, price_2 } = req.body;

  try {
    const newTurqiPrice = await TurqiPrices.create({
      room_type,
      service,
      price_1,
      price_2
    });

    res.status(201).json({
      message: 'Turqi price added successfully',
      turqiPrice: newTurqiPrice
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding Turqi price', error: error.message });
  }
};

// Delete Turqi price
const deleteTurqiPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const turqiPrice = await TurqiPrices.findByPk(id);
    if (!turqiPrice) {
      return res.status(404).json({ error: 'Turqi price not found' });
    }
    await turqiPrice.destroy();
    res.status(200).json({ message: 'Turqi price deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Turqi price
const updateTurqiPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { room_type, service, price_1, price_2 } = req.body;
    const turqiPrice = await TurqiPrices.findByPk(id);
    if (!turqiPrice) {
      return res.status(404).json({ error: 'Turqi price not found' });
    }

    turqiPrice.room_type = room_type || turqiPrice.room_type;
    turqiPrice.service = service || turqiPrice.service;
    turqiPrice.price_1 = price_1 || turqiPrice.price_1;
    turqiPrice.price_2 = price_2 || turqiPrice.price_2;

    await turqiPrice.save();
    res.status(200).json(turqiPrice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllTurqiPrices, addTurqiPrice, deleteTurqiPrice, updateTurqiPrice };
