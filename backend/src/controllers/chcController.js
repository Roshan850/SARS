const CHC = require('../models/CHC');


exports.createCHC = async (req, res) => {
try {
const chc = await CHC.create(req.body);
res.status(201).json(chc);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.getAllCHC = async (req, res) => {
try {
const data = await CHC.find().populate('equipments');
res.json(data);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.getNearbyCHC = async (req, res) => {
try {
const { lng, lat } = req.query;
const centers = await CHC.find({
location: {
$near: {
$geometry: { type: 'Point', coordinates: [lng, lat] },
$maxDistance: 5000
}
}
});


res.json(centers);
} catch (err) {
res.status(500).json({ error: err.message });
}
};