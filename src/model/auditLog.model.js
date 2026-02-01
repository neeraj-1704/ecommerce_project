// models/auditLog.model.js
import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    entity: {
      type: String,
      required: true, // Order, Payment, Inventory
      index: true,
    },

    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    action: {
      type: String,
      required: true, // CREATE, UPDATE, DELETE
    },

    before: {
      type: mongoose.Schema.Types.Mixed,
    },

    after: {
      type: mongoose.Schema.Types.Mixed,
    },

    actorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const AuditLog = mongoose.model("AuditLog", auditLogSchema);
