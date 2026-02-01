// models/payment.model.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
            index: true,
        },

        provider: {
            type: String,
            enum: ["razorpay", "stripe"],
            required: true,
        },

        status: {
            type: String,
            enum: ["created", "authorized", "captured", "failed", "refunded"],
            default: "created",
            index: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
