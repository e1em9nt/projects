'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook to read and toggle a country’s 'favorite' status from localStorage
 *
 * @param countryName - offitial name of the country to track
 * @returns whether this country is currently marked favorite and toggle favorite status
 */
export function useFavoriteCountry(countryName: string) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  /**
   * Loads the array of favorite country names from localStorage
   */
  useEffect(() => {
    const favsArr: string[] = JSON.parse(localStorage.getItem('favoriteCountries') || '[]');

    setIsFavorite(favsArr.includes(countryName));
  }, [countryName]);

  /**
   * Toggle the favorite status for this country
   */
  const handleToggle = useCallback(() => {
    const favsArr: string[] = JSON.parse(localStorage.getItem('favoriteCountries') || '[]');

    let updatedArr: string[];

    if (favsArr.includes(countryName)) {
      updatedArr = favsArr.filter((countries) => countries !== countryName);
      setIsFavorite(false);
    } else {
      updatedArr = [...favsArr, countryName];
      setIsFavorite(true);
    }
    localStorage.setItem('favoriteCountries', JSON.stringify(updatedArr));
  }, [countryName]);

  return { isFavorite, handleToggle };
}
