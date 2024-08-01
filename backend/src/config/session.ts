import session from 'express-session';
import MongoStore from 'connect-mongo';
import { mongoConnection } from './database';

export const sessionConfig = session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        clientPromise: mongoConnection.asPromise().then(connection => connection.getClient()),
        collectionName: 'sessions'
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
});