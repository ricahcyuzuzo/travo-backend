import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    plateNo: String,
    driverId: String,
    agencyId: String,
    createdAt: {
        type: String,
        default: new Date(),
    },
});

const Vehicle = mongoose.model('vehicles', vehicleSchema);

export default Vehicle;
