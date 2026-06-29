import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import buyerRoutes from './routes/buyer';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);

app.get('/', (req, res) => res.send({ status: 'Buyer portal API running' }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
