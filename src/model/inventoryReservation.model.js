// models/inventoryReservation.model.js
import mongoose from "mongoose";

const inventoryReservationSchema = new mongoose.Schema(
  {
    skuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SKU",
      required: true,
      index: true,
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-delete expired reservations
inventoryReservationSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

export const InventoryReservation = mongoose.model(
  "InventoryReservation",
  inventoryReservationSchema
);
