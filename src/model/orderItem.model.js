// models/orderItem.model.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    skuId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    titleSnapshot: {
      type: String,
      required: true,
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

    qty: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

orderItemSchema.index({ orderId: 1 });

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);
