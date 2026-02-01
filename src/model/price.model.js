// models/price.model.js
import mongoose from "mongoose";

const priceSchema = new mongoose.Schema(
  {
    skuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SKU", // optional, works even if SKU model exists
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      uppercase: true, // INR, USD
      length: 3,
      index: true,
    },

    region: {
      type: String,
      required: true, // IN, US, EU
      index: true,
    },

    validFrom: {
      type: Date,
      required: true,
      index: true,
    },

    validTo: {
      type: Date,
      default: null, // null = open-ended
      index: true,
    },

    priceType: {
      type: String,
      enum: ["base", "sale", "festival"],
      default: "base",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);


export const Price = mongoose.model("Price", priceSchema);


// Product
//  └── ProductVariant
//        └── SKU
//              └── Price (multiple)