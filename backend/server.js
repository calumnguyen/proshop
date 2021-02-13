import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDb();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(notFound);

app.use(errorHandler);

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
