import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoConnect from './config/db.config';
import authRoutes from './routes/auth.routes';
import agencyRoutes from './routes/agency.routes';
import travellerRoutes from './routes/traveller.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', agencyRoutes);
app.use('/api', travellerRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ 
      message: "Welcome to Travo API." 
    });
});

app.use((req, res) => {
  res.type('json').status(404).json({
      message: '404 Endpoint not found',
      status: 404
  });
});
const port = process.env.PORT || 2000
app.listen(port, () => console.log(`Server is running on port ${process.env.PORT}.`));
mongoConnect();
