const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema(
  {
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["tractor", "harvester", "seed-drill", "sprayer", "plough", "rotavator", "other"]
    },

    

    images: [String],

    ratePerHour: { type: Number, required: true },
    ratePerDay: { type: Number, required: true },

    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }
    },

    availability: [
      {
        from: Date,
        to: Date
      }
    ],

    status: {
      type: String,
      enum: ["active", "inactive", "under_maintenance"],
      default: "active"
    },

    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

EquipmentSchema.index({ location: "2dsphere" });
EquipmentSchema.index({ ownerId: 1 });

module.exports = mongoose.model("Equipment", EquipmentSchema);
