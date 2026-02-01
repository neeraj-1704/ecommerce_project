// models/productVariant.model.js
import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    options: {
      color: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
    },

    skuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SKU",
      required: true,
      unique: true, // one variant → one SKU
    },
  },
  {
    timestamps: true,
  }
);

// // Prevent duplicate variants (same product + same options)
// productVariantSchema.index(
//   { productId: 1, "options.color": 1, "options.size": 1 },
//   { unique: true }
// );

export const ProductVariant = mongoose.model(
  "ProductVariant",
  productVariantSchema
);
