import { GetStaticPaths, GetStaticProps } from 'next';

// components
import CountryCard from '@/components/CountryCard';
import type { CountryProps } from '@/components/CountriesList';

// constant variable
import { COUNTRIES_API } from '@/lib/constants';

/**
 * Props for the CountryPage component
 *
 * @interface CountryPageProps
 */
interface CountryPageProps {
  country: CountryProps;
}

/**
 * builds all the dynamic routes for country detail pages
 *
 * @returns array of entries or fallback
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${COUNTRIES_API}all?fields=name`);
  const countryNames: { name: { official: string } }[] = await response.json();

  const paths = countryNames.map((country) => ({
    params: { name: country.name.official },
  }));

  return {
    paths,
    fallback: false, // any name not returned here will 404
  };
};

/**
 * fetches detailed data for a single country at build time
 *
 * @param context.params - route parameters
 * @returns props for CountryPage component
 */
export const getStaticProps: GetStaticProps<CountryPageProps> = async ({ params }) => {
  const countryName = params?.name as string;

  const response = await fetch(
    `${COUNTRIES_API}name/${encodeURIComponent(countryName)}?fullText=true`
  );

  const data: CountryProps[] = await response.json();
  const country = data[0];

  return {
    props: {
      country,
    },
  };
};

/**
 * CountryPage renders the detail view for a single country
 *
 * @param props.country - the country data object
 * @returns {JSX.Element}
 */
export default function CountryPage({ country }: CountryPageProps) {
  return <CountryCard country={country} />;
}
