import type { NextApiRequest, NextApiResponse } from 'next';

// constant variable
import { COUNTRIES_API } from '@/lib/constants';

/**
 * Response payload for the region list API
 *
 * @typedef {Object} Data
 */
type Data = {
  regions: string[];
};

/**
 * Minimal country object containing only the region field
 *
 * @interface CountryRegion
 */
interface CountryRegion {
  region: string;
}

/**
 * API Route handler: GET /api/region
 * @param req - the incoming request object
 * @param res - the response object used to send back JSON
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch(`${COUNTRIES_API}all?fields=region`);
  const data: CountryRegion[] = await response.json();

  // build a sorted, unique list of non-empty region strings
  const regions = Array.from(new Set(data.map((country) => country.region).filter(Boolean))).sort();

  // return the regions list
  res.status(200).json({ regions });
}
