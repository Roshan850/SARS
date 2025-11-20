const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
{
name: { type: String, required: true, trim: true },
email: { type: String, required: true, unique: true, lowercase: true },
phone: { type: String, required: true },
role: { type: String, enum: ['farmer', 'owner', 'admin'], required: true },
passwordHash: { type: String, required: true },
address: {
village: String,
district: String,
state: String,
pincode: String,
},
location: {
type: { type: String, enum: ['Point'], default: 'Point' },
coordinates: { type: [Number], required: true }, // [lng, lat]
},
kycDocs: [
{
type: { type: String },
url: String,
verified: { type: Boolean, default: false },
},
],
walletBalance: { type: Number, default: 0 },
rating: { average: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
isVerified: { type: Boolean, default: false },
},
{ timestamps: true }
);


UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ location: '2dsphere' });


module.exports = mongoose.model('User', UserSchema);