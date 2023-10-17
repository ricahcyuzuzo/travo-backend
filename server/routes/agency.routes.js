import express from 'express';
import verifyLogin from '../middlewares/verifyLogin';
import { addVehicle, createTicket, getBooking, getOurTickets, getOurVehicles } from '../controllers/agency.controller';

const routes = express();

routes.post('/ticket', verifyLogin, createTicket);
routes.post('/vehicle', verifyLogin, addVehicle);
routes.get('/ourtickets', verifyLogin, getOurTickets);
routes.get('/bookings', verifyLogin, getBooking);
routes.get('/vehicles', verifyLogin, getOurVehicles);

const agencyRoutes = routes;

export default agencyRoutes;
