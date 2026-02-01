// models/shipment.model.js
import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    carrier: {
      type: String,
      required: true,
    },

    trackingNumber: {
      type: String,
      index: true,
    },

    status: {
      type: String,
      enum: ["created", "picked", "shipped", "delivered", "returned"],
      default: "created",
      index: true,
    },
  },
  { timestamps: true }
);

export const Shipment = mongoose.model("Shipment", shipmentSchema);
