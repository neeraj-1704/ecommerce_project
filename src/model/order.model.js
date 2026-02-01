// models/order.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
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
            default: "created",
            index: true,
        },

        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },

        currency: {
            type: String,
            required: true,
            uppercase: true, // INR, USD
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: true },
    }
);

export const Order = mongoose.model("Order", orderSchema);
