import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './config/auth.config';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API Server is running on http://localhost:${PORT}`);
});