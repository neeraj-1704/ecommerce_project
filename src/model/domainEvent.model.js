// models/domainEvent.model.js
import mongoose from "mongoose";

const domainEventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true, // ORDER_CREATED, PAYMENT_CAPTURED
      index: true,
    },

    payload: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  }
);

export const DomainEvent = mongoose.model("DomainEvent", domainEventSchema);
