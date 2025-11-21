const express = require("express");
const router = express.Router();

const { 
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment
} = require("../controllers/equipmentController");


router.route("/")
  .get(getAllEquipment)
  .post(createEquipment);    


router.route("/create")
  .post(createEquipment);


router.route("/:id")
  .get(getEquipmentById)
  .put(updateEquipment)
  .delete(deleteEquipment);

module.exports = router;


