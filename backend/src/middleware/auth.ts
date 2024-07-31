import express from 'express';

export const adminAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const adminToken = req.header('X-Admin-Token');

    if (adminToken !== process.env.ADMIN_SECRET_TOKEN) {
        return res.status(403).json({ error: 'Access denied' });
    }

    next();
};