// models/cart.model.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["active", "abandoned", "converted"],
      default: "active",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Only one active cart per user
cartSchema.index(
  { userId: 1, status: 1 },
  { unique: true, partialFilterExpression: { status: "active" } }
);

export const Cart = mongoose.model("Cart", cartSchema);
