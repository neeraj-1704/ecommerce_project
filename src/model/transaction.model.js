// models/transaction.model.js
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
      index: true,
    },

    gatewayTxnId: {
      type: String,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["initiated", "success", "failure"],
      required: true,
    },

    rawResponse: {
      type: mongoose.Schema.Types.Mixed, // store gateway payload
      required: true,
    },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);



// 🧠 Why this separation matters (INTERVIEW 🔥)

// One payment → multiple gateway callbacks

// Retry safe

// Refunds don’t corrupt order data

// Legal & audit compliance