import express from 'express';
import { bookTicket, filterTickets, getBookedTickets, getTickets } from '../controllers/traveller.controller';
import verifyLogin from '../middlewares/verifyLogin';

const routes = express();

routes.get('/tickets', getTickets);
routes.get('/filter', filterTickets);
routes.post('/book', verifyLogin ,bookTicket);
routes.get('/history', verifyLogin, getBookedTickets);

const travellerRoutes = routes;

export default travellerRoutes;
