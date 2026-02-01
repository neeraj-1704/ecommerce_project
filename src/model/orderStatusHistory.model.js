// models/orderStatusHistory.model.js
import mongoose from "mongoose";

const orderStatusHistorySchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
            index: true,
        },

        status: {
            type: String,
            enum: [
                "created",
                "paid",
                "processing",
                "shipped",
                "delivered",
                "cancelled",
                "refunded",
            ],
            required: true,
            index: true,
        },

        changedAt: {
            type: Date,
            default: Date.now,
            index: true,
        },

        changedBy: {
            type: String,
            enum: ["system", "user", "admin"],
            required: true,
        },
    },
    {
        timestamps: false,
    }
);

export const OrderStatusHistory = mongoose.model(
    "OrderStatusHistory",
    orderStatusHistorySchema
);




// 🧠 Order Lifecycle (CRITICAL FLOW 🔥)
// Cart (active)
//    ↓ checkout
// Order (created)
//    ↓ payment success
// Order (paid)
//    ↓ warehouse
// Order (processing)
//    ↓ logistics
// Order (shipped)
//    ↓ delivery
// Order (delivered)


// Each transition → insert into OrderStatusHistory

// ❌ Common Order Design Mistakes (Interview Killers 🚨)

// ❌ Recalculate price from product
// ❌ No status history
// ❌ Update order items after creation
// ❌ Soft-delete orders

// Your design avoids all of these 👏

