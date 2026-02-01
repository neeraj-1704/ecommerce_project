// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },

        attributes: {
            type: Map,
            of: String, // e.g. material: "cotton", fit: "regular"
        },

        status: {
            type: String,
            enum: ["draft", "active", "archived"],
            default: "draft",
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", productSchema);



// Product (1)
//   └── ProductVariant (N)
//           └── SKU (1)