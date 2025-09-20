// components
import HomePage from '@/components/HomePage';
import { CountryProps } from '@/components/CountriesList';
// constant variable
import { COUNTRIES_API } from '@/lib/constant';

/**
 * Fetches the list of countries (name, flag, region) at build time and renders the HomePage component
 *
 * @returns props for the HomePage component
 */

export default async function Home() {
  const response = await fetch(`${COUNTRIES_API}all?fields=name,flags,region`);
  const countries: CountryProps[] = await response.json();

  return <HomePage countries={countries} />;
}
