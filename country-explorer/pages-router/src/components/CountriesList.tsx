import Image from 'next/image';
import Link from 'next/link';

// components
import FavoriteIcon from '@/components/FavoriteIcon';

// styles
import styles from '../styles/Countries.module.css';

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
    <ul className={styles.list}>
      {countries.map((country) => {
        return (
          <li key={country.name.official} className={styles.card}>
            <Link
              href={`/countries/${encodeURIComponent(country.name.official)}`}
              passHref
              className={styles.country}
            >
              <div className={styles.flag}>
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt}
                  fill
                  sizes="220px"
                  style={{ objectPosition: 'top center' }}
                />
              </div>

              <h3 className={styles['country-name']}>{country.name.official}</h3>
              <p className={styles.region}>Region: {country.region}</p>
            </Link>
            <FavoriteIcon countryName={country.name.official} />
          </li>
        );
      })}
    </ul>
  );
}
