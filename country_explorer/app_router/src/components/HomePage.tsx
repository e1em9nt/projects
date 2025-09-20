'use client';

// components
import CountriesList, { CountryProps } from '@/components/CountriesList';
import RegionFilter from '@/components/RegionFilter';
import SearchBar from '@/components/SearchBar';

import { useState } from 'react';

/**
 * Home page component displaying a list of countries with searching and filtering
 *
 * @param props.countries - array of countries to display
 * @returns {JSX.Element}
 */
export default function HomePage({ countries }: { countries: CountryProps[] }) {
  // currently selected region filter
  const [region, setRegion] = useState<string>('');
  // current search query
  const [search, setSearch] = useState<string>('');

  const filteredCountries = countries
    .filter((country) =>
      search ? country.name.official.toLowerCase().includes(search.toLowerCase()) : true
    )
    .filter((country) => (region ? country.region === region : true));

  return (
    <>
      <div className="home__filter">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <CountriesList countries={filteredCountries} />
    </>
  );
}
