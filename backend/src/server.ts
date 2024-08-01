import express from 'express';
import cors from 'cors';
import { connectDatabase} from './config/database';
import { sessionConfig } from './config/session';
import { logPageView } from './middleware/logPageView';
import analyticsRoutes from './routes/analytics';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig);
app.use(logPageView);

app.get('/', (req, res) => {
    res.send('Welcome to the Web Analytics API');
  });
  
app.use('/analytics', analyticsRoutes);

function startServer() {
    connectDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer()

