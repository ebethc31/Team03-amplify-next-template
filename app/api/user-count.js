import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await query('SELECT COUNT(*) AS count FROM USER');
    const count = result[0].count;  // Extract the count from the result
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ message: 'Error fetching user count', error: error.message });
  }
}
