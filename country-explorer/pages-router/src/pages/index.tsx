'use client';

import { GetStaticProps } from 'next';

// components
import CountriesList, { CountryProps } from '@/components/CountriesList';
import RegionFilter from '@/components/RegionFilter';
import SearchBar from '@/components/SearchBar';

// constant variable
import { COUNTRIES_API } from '@/lib/constants';

import { useState } from 'react';

/**
 * Fetches the list of countries (name, flag, region) at build time
 *
 * @returns props for the HomePage component
 */
export const getStaticProps: GetStaticProps<{ countries: CountryProps[] }> = async () => {
  const response = await fetch(`${COUNTRIES_API}all?fields=name,flags,region`);
  const countries = await response.json();

  return {
    props: { countries },
  };
};

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
      <div className="filtering">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <CountriesList countries={filteredCountries} />
    </>
  );
}
