import express from 'express';
import indexRoutes from './routes/index';

const app = express();
app.use(express.json());
app.use(indexRoutes);
 

app.listen(process.env.PORT || 3000);