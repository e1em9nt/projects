import Image from 'next/image';

// components
import FavoriteIcon from './FavoriteIcon';
import type { CountryProps } from './CountriesList';

// helpers
import { extractCurrencies, extractLanguages } from '@/helpers/formatters';
import { renderDetail } from '@/helpers/renderDetails';

/**
 * Props for the CountryCard component
 *
 * @interface CountryCardProps
 */
interface CountryCardProps {
  country: CountryProps;
}

/**
 * Renders a detailed card for a single country
 *
 * @param props.country - the country object containing all display fields
 * @returns {JSX.Element}
 */
export default function CountryCard({ country }: CountryCardProps) {
  const countryName = country.name.official;

  const details = [
    { label: 'Capital', value: country.capital, className: 'country-card__detail' },
    {
      label: 'Region',
      value: country.region,
      className: 'country-card__detail country-card__detail--region',
    },
    { label: 'Population', value: country.population, className: 'country-card__detail' },
    {
      label: 'Languages',
      value: extractLanguages(country.languages),
      className: 'country-card__detail',
    },
    {
      label: 'Currencies',
      value: extractCurrencies(country.currencies),
      className: 'country-card__detail',
    },
    {
      label: 'Borders',
      value: country.borders,
      className: 'country-card__detail',
    },
  ];

  return (
    <main>
      <article className="country-card">
        <div className="country-card__flag">
          <Image
            src={country.flags.png}
            alt={country.flags.alt ?? country.name.official}
            fill
            sizes="260px"
            style={{ objectPosition: 'top center' }}
          />
        </div>

        <h3 className="country-card__name">{countryName}</h3>
        <ul className="country-card__details">{details.map(renderDetail)}</ul>

        <FavoriteIcon countryName={countryName} />
      </article>
    </main>
  );
}
