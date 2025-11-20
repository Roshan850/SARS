const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema(
{
bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
targetId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' },
rating: { type: Number, min: 1, max: 5, required: true },
comment: String
},
{ timestamps: true }
);


ReviewSchema.index({ targetId: 1 });


module.exports = mongoose.model('Review', ReviewSchema);