const RomeSlider = require('../models/RomeSlider');

// Fetch all images
const getAllRomeImages = async (req, res) => {
  try {
    const images = await RomeSlider.findAll(); // Replace with your ORM query
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new image
const addRomeImage = async (req, res) => {
  try {
    const { imageBase64, title } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ message: 'Image data (Base64) is required' });
    }

    const newImage = await RomeSlider.create({
      imageBase64,
      title,
    });

    res.status(201).json({
      message: 'Image uploaded successfully',
      image: newImage,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an image
const deleteRomeImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await RomeSlider.findByPk(id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    await image.destroy();
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRomeImages,
  addRomeImage,
  deleteRomeImage,
};
