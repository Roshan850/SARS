// controllers/farmerController.js
const Farmer = require('../models/Farmer');

exports.createFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.create(req.body);
    res.status(201).json(farmer);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    res.status(200).json(farmer);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
