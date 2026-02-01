// models/inventory.model.js
import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        skuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SKU",
            required: true,
            index: true,
        },

        warehouseId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true,
        },

        availableQty: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },

        reservedQty: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },

        damagedQty: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// One inventory record per SKU per warehouse
inventorySchema.index(
    { skuId: 1, warehouseId: 1 },
    { unique: true }
);

export const Inventory = mongoose.model("Inventory", inventorySchema);
