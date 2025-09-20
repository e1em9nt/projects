'use client';

import { useEffect, useState } from 'react';

// components
import CountriesList, { CountryProps } from '@/components/CountriesList';

// constant variable
import { COUNTRIES_API } from '@/lib/constants';

/**
 * FavoritesPage component displays the user's favorite countries
 *
 * @returns {JSX.Element}
 */
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [countries, setCountries] = useState<CountryProps[]>([]);

  /**
   * On component mount, initialize favorites from localStorage
   *
   * If there are any favorite country names, fetch all countries and filter down to only those favorites
   */
  useEffect(() => {
    async function loadFavorites() {
      // read saved favorites from localStorage
      const favsArr: string[] = JSON.parse(localStorage.getItem('favoriteCountries') || '[]');

      setFavorites(favsArr);

      if (favsArr.length === 0) {
        return;
      }

      // fetch all countries
      try {
        const response = await fetch(`${COUNTRIES_API}all?fields=name,flags,region`);

        if (!response.ok) {
          throw new Error(`Error fetching countries. API responded with ${response.status}`);
        }

        const data: CountryProps[] = await response.json();

        const favCountries = data.filter((country) => favsArr.includes(country.name.official));
        setCountries(favCountries);
      } catch (err) {
        alert(err);
      }
    }
    loadFavorites();
  }, []);

  return (
    <main>
      {favorites.length === 0 ? (
        <h4>You haven’t favorited any countries yet</h4>
      ) : (
        <>
          <h2>Your Favorites</h2>
          <CountriesList countries={countries} />
        </>
      )}
    </main>
  );
}
