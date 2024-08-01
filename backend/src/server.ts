import express from 'express';
import cors from 'cors';
import { connectDatabase} from './config/database';
import PageView from './models/PageView';
import { sessionConfig } from './config/session';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig);

async function logPageView(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const newPageView = new PageView({
            url: req.originalUrl,
            userId: req.headers['user-id'],
            deviceInfo: req.headers['user-agent']
        });

        await newPageView.save();
        console.log('Page view logged');
    } catch (error) {
        console.error('Error logging page view:', error);
    }
    next();
}

app.use(logPageView);

function startServer() {
    connectDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer()

