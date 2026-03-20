import express from 'express';
import { connectWithRetry } from './db.js';
import productsRoutes from './routes/routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/videojuegos', productsRoutes) //Se empezó por rutas de videojuegos

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

const start = async () => {
  await connectWithRetry();

  app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
  });
};

start();