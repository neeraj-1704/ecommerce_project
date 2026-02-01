// models/promotion.model.js
import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["coupon", "automatic"],
      required: true,
    },

    rules: {
      type: mongoose.Schema.Types.Mixed, // JSON logic
      required: true,
    },

    discountStrategy: {
      type: mongoose.Schema.Types.Mixed, // flat, percentage, tiered
      required: true,
    },
  },
  { timestamps: true }
);

export const Promotion = mongoose.model("Promotion", promotionSchema);
