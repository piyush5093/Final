import { Portfolio } from '../models/Portfolio.js';
import { fallbackPortfolio } from '../data.js';

export const getPortfolio = async (_req, res) => {
  try {
    const portfolio = await Portfolio.findOne().sort({ updatedAt: -1 }).lean();
    res.json({ source: portfolio ? 'database' : 'fallback', portfolio: portfolio || fallbackPortfolio });
  } catch (error) {
    res.status(200).json({ source: 'fallback', portfolio: fallbackPortfolio, message: error.message });
  }
};
