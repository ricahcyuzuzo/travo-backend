import express from 'express';
import { createUser, login } from '../controllers/auth.controller';

const routes = express();

routes.post('/signup', createUser);
routes.post('/login', login);

const authRoutes = routes;

export default authRoutes;
