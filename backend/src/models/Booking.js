const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Equipment", required: true },
    // ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    status: {
      type: String,
      enum: ["pending", "confirmed", "in_progress", "completed", "cancelled"],
      default: "pending"
    },

    bookingAmount: Number,

    paymentStatus: {
      type: String,
      enum: ["pending", "authorized", "captured", "refunded", "failed"],
      default: "pending"
    },

    pickupMode: {
      type: String,
      enum: ["self", "delivery"],
      default: "delivery"
    },

    deliveryETA: Number, // minutes
    notes: String
  },
  { timestamps: true }
);

BookingSchema.index({ equipmentId: 1, startTime: 1 });
BookingSchema.index({ farmerId: 1 });

module.exports = mongoose.model("Booking", BookingSchema);
