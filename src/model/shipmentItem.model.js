// models/shipmentItem.model.js
import mongoose from "mongoose";

const shipmentItemSchema = new mongoose.Schema(
    {
        shipmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
            required: true,
            index: true,
        },

        orderItemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OrderItem",
            required: true,
            index: true,
        },

        qty: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    { timestamps: true }
);

export const ShipmentItem = mongoose.model("ShipmentItem", shipmentItemSchema);


// 🧠 Supports automatically

// ✅ Partial shipments
// ✅ Multi-warehouse fulfillment
// ✅ Backorders
// ✅ Split delivery