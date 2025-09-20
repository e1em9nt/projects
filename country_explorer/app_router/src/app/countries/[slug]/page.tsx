import { notFound } from 'next/navigation';

// components
import CountryCard from '@/components/CountryCard';
import type { CountryProps } from '@/components/CountriesList';

// constant variable
import { COUNTRIES_API } from '@/lib/constant';
import slugify from '@/lib/slugify';

export const dynamic = 'force-static';

/**
 * Props for the CountryPage component
 *
 * @interface PageProps
 */
interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * CountryPage renders the detail view for a single country
 *
 * Uses the 'slug' from the route to look up the official country name, fetches full country data at build time (static).
 * If no match or fetch failure occurs - renders the 404 page
 *
 * @param props.params - promise resolving to the oroute slug
 * @returns {Promise<JSX.Element>}
 */
export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;

  // fetch all country names
  const listResponse = await fetch(`${COUNTRIES_API}all?fields=name`);

  if (!listResponse.ok) notFound();

  const countryNames: { name: { official: string } }[] = await listResponse.json();

  const matchSlug = countryNames.find((country) => slugify(country.name.official) === slug);

  if (!matchSlug) notFound();

  const countryName = matchSlug.name.official;

  // fetch full details by offitial name
  const detailsResponse = await fetch(
    `${COUNTRIES_API}name/${encodeURIComponent(countryName)}?fullText=true`
  );

  if (!detailsResponse.ok) {
    notFound();
  }

  const data: CountryProps[] = await detailsResponse.json();
  const country = data[0];

  if (!country) {
    notFound();
  }

  return <CountryCard country={country} />;
}
