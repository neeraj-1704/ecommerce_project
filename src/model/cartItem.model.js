// models/cartItem.model.js
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
    {
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
            required: true,
            index: true,
        },

        skuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SKU",
            required: true,
            index: true,
        },

        qty: {
            type: Number,
            required: true,
            min: 1,
        },

        priceSnapshot: {
            amount: {
                type: Number,
                required: true,
                min: 0,
            },
            currency: {
                type: String,
                required: true,
                uppercase: true,
            },
            region: {
                type: String,
                required: true,
            },
            priceType: {
                type: String,
                enum: ["base", "sale", "festival"],
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

// One SKU only once per cart
cartItemSchema.index(
    { cartId: 1, skuId: 1 },
    { unique: true }
);

export const CartItem = mongoose.model("CartItem", cartItemSchema);




// User
//  └── Cart (1 active)
//         └── CartItem (N)
//                └── SKU
//                └── priceSnapshot
