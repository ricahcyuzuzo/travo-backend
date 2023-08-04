import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    pin: String,
    type: String,
    createdAt: {
        type: String,
        default: new Date(),
    },
});

const usersModel = mongoose.model('users', userSchema);

export default usersModel;
