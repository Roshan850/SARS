// controllers/equipmentController.js
const Equipment = require('../models/Equipment');

// CREATE Equipment
exports.createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json({
      success: true,
      message: "Equipment created successfully",
      data: equipment
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET ALL Equipment
exports.getAllEquipment = async (req, res) => {
  try {
    const equipmentList = await Equipment.find().populate("chc");
    res.status(200).json({
      success: true,
      data: equipmentList
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET Equipment BY ID
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id).populate("chc");

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found"
      });
    }

    res.status(200).json({
      success: true,
      data: equipment
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE Equipment
exports.updateEquipment = async (req, res) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Equipment updated successfully",
      data: updatedEquipment
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE Equipment
exports.deleteEquipment = async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);

    if (!deletedEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Equipment deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
