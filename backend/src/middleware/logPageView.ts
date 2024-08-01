import express from 'express';
import PageView from '../models/PageView';

export async function logPageView(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const newPageView = new PageView({
            url: req.originalUrl,
            userId: req.headers['user-id'],
            deviceInfo: req.headers['user-agent']
        });

        await newPageView.save();
        console.log('Page view logged:', {
            url: req.originalUrl,
            userId: req.headers['user-id'],
            deviceInfo: req.headers['user-agent']
        });
    } catch (error) {
        console.error('Error logging page view:', error);
    }
    next();
}