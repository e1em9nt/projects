import { notFound } from 'next/navigation';

// components
import { CountryProps } from '@/components/CountriesList';
import CountryCard from '@/components/CountryCard';

// constant variable
import { COUNTRIES_API } from '@/lib/constant';

export const dynamic = 'force-dynamic';

/**
 * Page component that fetches a list of all countries at request time, selects one at random, and renders its details
 *
 * @returns {JSX.Element}
 */
export default async function RandomCountryPage() {
  const response = await fetch(
    `${COUNTRIES_API}all?fields=name,flags,region,capital,population,languages,currencies,borders`
  );
  const data: CountryProps[] = await response.json();

  // if the fetch failed or returned nothing, show 404
  if (!response.ok || !Array.isArray(data) || data.length === 0) {
    notFound();
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomCountry = data[randomIndex];

  return (
    <main className="random-country">
      <h2>Random Country</h2>
      <CountryCard country={randomCountry} />
    </main>
  );
}
