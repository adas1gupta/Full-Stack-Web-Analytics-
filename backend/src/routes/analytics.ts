import express from 'express';
import PageView from "../models/PageView";

const router = express.Router();

router.post('/pageview', async (req, res) => {
    try {
        const { url, userId, deviceInfo } = req.body;
        const newPageView = new PageView({
            url,
            userId,
            deviceInfo
        });
        await newPageView.save();
        res.status(200).json({ message: 'Page view recorded successfully' });
    } catch (error) {
        console.error('Error recording page view:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get page view analytics
router.get('/pageviews', async (req, res) => {
    try {
        const totalPageViews = await PageView.countDocuments();
        res.status(200).json({ totalPageViews });
    } catch (error) {
        console.error('Error fetching page view analytics:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;