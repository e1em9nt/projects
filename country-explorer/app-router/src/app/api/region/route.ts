import { NextResponse } from 'next/server';

// constant variable
import { COUNTRIES_API } from '@/lib/constant';

/**
 * Minimal country object containing only the region field
 *
 * @interface CountryRegion
 */
interface CountryRegion {
  region: string;
}

/**
 * GET /api/region
 *
 * @returns {NextResponse<{ regions: string[] }>} JSON response containing a 'regions' array of unique, sorted region names
 */
export async function GET() {
  const response = await fetch(`${COUNTRIES_API}all?fields=region`);
  const data: CountryRegion[] = await response.json();

  // build a sorted, unique list of non-empty region strings
  const regions = Array.from(new Set(data.map((country) => country.region).filter(Boolean))).sort();

  // return the regions list
  return NextResponse.json({ regions });
}
