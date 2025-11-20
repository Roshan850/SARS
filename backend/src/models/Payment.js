const mongoose = require('mongoose');


const PaymentSchema = new mongoose.Schema(
{
bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
provider: { type: String, enum: ['razorpay','stripe','upi'], required: true },
providerPaymentId: { type: String, unique: true },
amount: { type: Number, required: true },
status: { type: String, enum: ['initiated','authorized','captured','failed','refunded'], default: 'initiated' },
receiptUrl: String
},
{ timestamps: true }
);


PaymentSchema.index({ providerPaymentId: 1 });


module.exports = mongoose.model('Payment', PaymentSchema);