// models/appliedPromotion.model.js
import mongoose from "mongoose";

const appliedPromotionSchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
            index: true,
        },

        promotionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Promotion",
            required: true,
        },

        discountAmount: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

export const AppliedPromotion = mongoose.model(
    "AppliedPromotion",
    appliedPromotionSchema
);
