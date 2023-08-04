import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    agency: String,
    agencyId: String,
    price: String,
    from: String,
    destination: String,
    vehicle: String,
    time: String,
    arrival: String,
    createdAt: {
        type: String,
        default: new Date(),
    },
});

const Ticket = mongoose.model('tickets', ticketSchema);

export default Ticket;
