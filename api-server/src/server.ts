import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/', (req, res) => {
  res.send('API Server is running');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API Server is running on http://localhost:${PORT}`);
});
