import type { GetServerSideProps } from 'next';

// components
import { CountryProps } from '@/components/CountriesList';
import CountryCard from '@/components/CountryCard';

// constant variable
import { COUNTRIES_API } from '@/lib/constants';

/**
 * Fetches a random country on each request and passes it to the page as a prop
 *
 * @returns props for the RandomCountry component or notFount page
 */
export const getServerSideProps: GetServerSideProps<{ randomCountry: CountryProps }> = async () => {
  const response = await fetch(
    `${COUNTRIES_API}all?fields=name,flags,region,capital,population,languages,currencies,borders`
  );
  const data: CountryProps[] = await response.json();

  // if the fetch failed or returned nothing, show 404
  if (!response.ok || !Array.isArray(data) || data.length === 0) {
    return { notFound: true };
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomCountry = data[randomIndex];

  return { props: { randomCountry } };
};

/**
 * Props for the RandomCountry page component
 *
 * @interface RandomCountryProps
 */
interface RandomCountryProps {
  randomCountry: CountryProps;
}

/**
 * Page component that renders a single random country's details
 *
 * @param props.randomCountry - the country object fetched server-side
 * @returns {JSX.Element}
 */
export default function RandomCountry({ randomCountry }: RandomCountryProps) {
  return (
    <main className="random-country">
      <h2>Random Country</h2>
      <CountryCard country={randomCountry} />
    </main>
  );
}
