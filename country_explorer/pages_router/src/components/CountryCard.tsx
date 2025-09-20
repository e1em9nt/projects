import Image from 'next/image';
import React from 'react';

// components
import FavoriteIcon from './FavoriteIcon';
import type { CountryProps } from './CountriesList';

// helpers
import { extractCurrencies, extractLanguages } from '@/helpers/formatters';
import { renderDetail } from '@/helpers/renderDetails';

// styles
import countriesStyles from '../styles/Countries.module.css';
import countryStyle from '../styles/CountryCard.module.css';

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
    { label: 'Capital', value: country.capital },
    { label: 'Region', value: country.region, className: countriesStyles.region },
    { label: 'Population', value: country.population },
    { label: 'Languages', value: extractLanguages(country.languages) },
    { label: 'Currencies', value: extractCurrencies(country.currencies) },
    { label: 'Borders', value: country.borders },
  ];

  return (
    <article className={`${countryStyle.container} single-card`}>
      <div className={countryStyle.country}>
        <div className={countryStyle.flag}>
          <Image
            src={country.flags.png}
            alt={country.flags.alt}
            fill
            sizes="260px"
            style={{ objectPosition: 'top center' }}
          />
        </div>

        <h3 className={countriesStyles['country-name']}>{countryName}</h3>
        <ul className={countryStyle.details}>{details.map(renderDetail)}</ul>

        <FavoriteIcon countryName={countryName} />
      </div>
    </article>
  );
}
