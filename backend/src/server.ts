import express from 'express';
import cors from 'cors';
import { connectDatabase} from './config/database';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

function startServer() {
    connectDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer()

