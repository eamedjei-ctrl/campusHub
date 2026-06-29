import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import sellerRoutes from './routes/seller';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/seller', sellerRoutes);

app.get('/', (req, res) => res.send({ status: 'Seller portal API is running' }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
