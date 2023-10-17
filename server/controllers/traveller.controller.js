import jwtDecode from "jwt-decode";
import Booking from "../models/db/booking.model";
import Ticket from "../models/db/tickets.model";
import Mongoose from "mongoose";

export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        return res.status(200).json({
            tickets,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

export const bookTicket = async (req, res) => {
    // try {
        const { ticketId, date } = req.query;
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const user = decoded.user;
        
        const ticket = await Ticket.findById(ticketId);

        const bookedTicket = await Booking.create({
            _id: new Mongoose.Types.ObjectId(),
            ticket,
            ticketId,
            user,
            date,
            userId: user._id,
        });
        if(!bookedTicket){
            return res.status(500).json({
                message: 'Something went wrong',
            })
        }
        return res.status(200).json({
            message: 'Ticket booked successful.'
        })
    // } catch (error) {
    //     res.status(500).json({
    //         message: "Something went wrong",
    //         error
    //     });
    // }
}

export const getBookedTickets = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const user = decoded.user;

        const tickets = await Booking.find({ userId: user._id });

        return res.status(200).json({
            tickets,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

export const filterTickets = async (req, res) => {
    try {
        const { from, destination, date } = req.query;

        const tickets = await Ticket.find({ from, destination, time: date, });

        return res.status(200).json({
            tickets,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

