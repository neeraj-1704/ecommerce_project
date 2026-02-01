import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
    }
}, {
    timestamps: true
})


const User = model("user", userSchema);
export default User;