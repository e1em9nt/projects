import Image from 'next/image';
import Link from 'next/link';

// components
import FavoriteIcon from './FavoriteIcon';

import slugify from '@/lib/slugify';

/**
 * Data shape for a single country
 *
 * @interface CountryProps
 */
export interface CountryProps {
  name: {
    official: string;
  };
  flags: { png: string; alt: string };
  capital?: string[];
  region: string;
  population?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  borders?: string[];
}

/**
 * Props for the CountriesList component
 *
 * @interface CountriesProps
 */
export interface CountriesProps {
  countries: CountryProps[];
}

/**
 * Renders a responsive list of country cards
 *
 * @param props.countries - the list of countries to display
 * @returns {JSX.Element}
 */
export default function CountriesList({ countries }: CountriesProps) {
  return (
    <ul className="countries-list">
      {countries.map((country) => {
        return (
          <li key={country.name.official} className="countries-list__item">
            <Link
              href={`/countries/${slugify(country.name.official)}`}
              passHref
              className="countries-list__link"
            >
              <div className="countries-list__flag">
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt ?? country.name.official}
                  fill
                  sizes="220px"
                  style={{ objectPosition: 'top center' }}
                />
              </div>

              <h3 className="countries-list__name">{country.name.official}</h3>
              <p className="countries-list__region">Region: {country.region}</p>
            </Link>
            <FavoriteIcon countryName={country.name.official} />
          </li>
        );
      })}
    </ul>
  );
}
