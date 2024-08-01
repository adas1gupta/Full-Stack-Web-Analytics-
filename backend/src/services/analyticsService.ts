import PageView from '../models/PageView';

export async function getTotalPageViews(): Promise<number> {
    try {
        return await PageView.countDocuments();
    } catch (error) {
        console.error('Error fetching total page views:', error);
        throw error;
    }
}

export async function getDailyPageViews(): Promise<number> {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return await PageView.countDocuments({ timestamp: { $gte: today } });
    } catch (error) {
        console.error('Error fetching daily page views:', error);
        throw error;
    }
}

export async function getWeeklyPageViews(): Promise<number> {
    try {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return await PageView.countDocuments({ timestamp: { $gte: oneWeekAgo } });
    } catch (error) {
        console.error('Error fetching weekly page views:', error);
        throw error;
    }
}

export async function getMonthlyPageViews(): Promise<number> {
    try {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return await PageView.countDocuments({ timestamp: { $gte: oneMonthAgo } });
    } catch (error) {
        console.error('Error fetching monthly page views:', error);
        throw error;
    }
}

export async function getMorningPageViews(): Promise<number> {
    try {
        const today = new Date();
        const morningStart = new Date(today.setHours(5, 0, 0, 0));
        const morningEnd = new Date(today.setHours(12, 0, 0, 0));
        return await PageView.countDocuments({ timestamp: { $gte: morningStart, $lt: morningEnd } });
    } catch (error) {
        console.error('Error fetching morning page views:', error);
        throw error;
    }
}

export async function getAfternoonPageViews(): Promise<number> {
    try {
        const today = new Date();
        const afternoonStart = new Date(today.setHours(12, 0, 0, 0));
        const afternoonEnd = new Date(today.setHours(18, 0, 0, 0));
        return await PageView.countDocuments({ timestamp: { $gte: afternoonStart, $lt: afternoonEnd } });
    } catch (error) {
        console.error('Error fetching afternoon page views:', error);
        throw error;
    }
}

export async function getEveningPageViews(): Promise<number> {
    try {
        const today = new Date();
        const eveningStart = new Date(today.setHours(18, 0, 0, 0));
        const eveningEnd = new Date(today.setHours(23, 59, 59, 999));
        return await PageView.countDocuments({ timestamp: { $gte: eveningStart, $lte: eveningEnd } });
    } catch (error) {
        console.error('Error fetching evening page views:', error);
        throw error;
    }
}