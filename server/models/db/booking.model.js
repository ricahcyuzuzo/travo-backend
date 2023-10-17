import mongoose from "mongoose";

const bookingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticket: Object,
    ticketId: String,
    date: String,
    user: Object,
    userId: String,
    createdAt: {
        type: String,
    default: new Date(),
    }
});

const Booking = mongoose.model('bookings', bookingsSchema);

export default Booking;


