import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import portfolioRoutes from './routes/portfolioRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'portfolio-api' });
});

app.use('/api', portfolioRoutes);

connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
