// models/sku.model.js
import mongoose from "mongoose";

const skuSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true, // APPLE-IP14-BLK-128
      index: true,
    },

    barcode: {
      type: String,
      unique: true,
      sparse: true, // allow null but unique if exists
    },
  },
  {
    timestamps: true,
  }
);

export const SKU = mongoose.model("SKU", skuSchema);
