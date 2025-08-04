import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './config/auth.config.js';

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('API Server is running');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API Server is running on ${process.env.BETTER_AUTH_URL || `http://localhost:${PORT}`}`);
});