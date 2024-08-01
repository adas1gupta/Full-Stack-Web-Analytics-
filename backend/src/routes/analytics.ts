import express from 'express';
import { checkSessionSecret, checkAdminAccess } from '../middleware/auth';
import {
    getTotalPageViews,
    getDailyPageViews,
    getWeeklyPageViews,
    getMonthlyPageViews,
    getMorningPageViews,
    getAfternoonPageViews,
    getEveningPageViews,
} from '../services/analyticsService';

const router = express.Router();

router.use(checkSessionSecret);
router.use(checkAdminAccess);

router.get('/pageviews', async (req, res) => {
    try {
        const totalPageViews = await getTotalPageViews();
        res.status(200).json({ totalPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/daily', async (req, res) => {
    try {
        const dailyPageViews = await getDailyPageViews();
        res.status(200).json({ dailyPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/weekly', async (req, res) => {
    try {
        const weeklyPageViews = await getWeeklyPageViews();
        res.status(200).json({ weeklyPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/monthly', async (req, res) => {
    try {
        const monthlyPageViews = await getMonthlyPageViews();
        res.status(200).json({ monthlyPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/morning', async (req, res) => {
    try {
        const morningPageViews = await getMorningPageViews();
        res.status(200).json({ morningPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/afternoon', async (req, res) => {
    try {
        const afternoonPageViews = await getAfternoonPageViews();
        res.status(200).json({ afternoonPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/evening', async (req, res) => {
    try {
        const eveningPageViews = await getEveningPageViews();
        res.status(200).json({ eveningPageViews });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;