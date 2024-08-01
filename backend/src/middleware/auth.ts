import express from 'express';

export const checkSessionSecret = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const sessionEncrypt = req.get('session-secret');
    if (sessionEncrypt !== process.env.SESSION_SECRET) {
        return res.status(403).json({ error: 'Invalid session secret' });
    }
    next();
};

export const checkAdminAccess = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const adminSecret = req.get('admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
        return res.status(403).json({ error: 'Unauthorized admin access' });
    }
    next();
};

