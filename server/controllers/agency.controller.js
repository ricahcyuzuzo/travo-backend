import Mongoose from "mongoose";
import { validateTicket } from "../helpers/validations/ticket.validations";
import { createBodyTicket } from "../models/body/ticket.body";
import Ticket from "../models/db/tickets.model";
import jwtDecode from "jwt-decode";
import { validateVehicle } from "../helpers/validations/vehicle.validations";
import { addBodyVehicle } from "../models/body/vehicles.body";
import Vehicle from "../models/db/vehicles.model";

export const createTicket = async (req, res) => {
    try {
        const { price, from, destination, time, vehicle, arrival } = req.body;
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const agency = decoded.user;

        const { error } = validateTicket(createBodyTicket(req));

        if(error){
            return res.status(400).json({
                message: error.details[0].message.replace(/"/g, '')
            });
        }

        const results = await Ticket.find({ time, vehicle });

        if(results.length > 0) {
            return res.status(409).json({
                message: 'Timeslots is already used, please try another',
            })
        }

        const created = await Ticket.create({
            _id: new Mongoose.Types.ObjectId(),
            agency,
            agencyId: agency._id,
            price,
            from,
            destination,
            vehicle,
            time,
            arrival,
        });

        if(created){
            res.status(201).json({
                message: 'Ticket Created successfully',
                ticket: created,
            });

            return false;
        }

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

export const addVehicle = async (req, res) => {
    try {
        const { plateNo, driverId } = req.body;
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const agency = decoded.user;

        const { error } = validateVehicle(addBodyVehicle(req));

        if(error){
            return res.status(400).json({
                message: error.details[0].message.replace(/"/g, '')
            });
        }

        const results = await Vehicle.find({ plateNo });

        if(results.length > 0) {
            return res.status(409).json({
                message: 'Vehicle plate no is already used, please try another',
            })
        }

        const created = await Vehicle.create({
            _id: new Mongoose.Types.ObjectId(),
            plateNo,
            driverId,
            agencyId: agency._id,
        });

        if(created){
            res.status(201).json({
                message: 'Vehicle Created successfully',
                vehicle: created,
            });

            return false;
        }

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

export const getOurTickets = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const agency = decoded.user;

        const tickets = Ticket.find({ agencyId: agency._id });
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

export const getOurVehicles = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwtDecode(token);
        const agency = decoded.user;

        const vehicles = Vehicle.find({ agencyId: agency._id });
        return res.status(200).json({
            vehicles,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}


