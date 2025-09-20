'use client';

import { useEffect, useState } from 'react';

// styles
import styles from '../styles/Countries.module.css';

/**
 * Props for the FavoriteIcon component
 *
 * @interface FavoriteIconProps
 */
interface FavoriteIconProps {
  countryName: string;
}

/**
 * FavoriteIcon component renders a heart button that reflects and toggles the 'favorite' status of a country
 *
 * @param props.countryName - the name of the country this icon controls
 * @returns {JSX.Element}
 */
export default function FavoriteIcon({ countryName }: FavoriteIconProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  /**
   * On mount (or when countryName changes), load the array of favorite country names from localStorage
   */
  useEffect(() => {
    const favsArr: string[] = JSON.parse(localStorage.getItem('favoriteCountries') || '[]');

    setIsFavorite(favsArr.includes(countryName));
  }, [countryName]);

  /**
   * Toggle the favorite status for this country
   */
  const handleToggle = () => {
    const favsArr: string[] = JSON.parse(localStorage.getItem('favoriteCountries') || '[]');

    let updatedArr: string[];

    if (favsArr.includes(countryName)) {
      updatedArr = favsArr.filter((countries) => countries !== countryName);
    } else updatedArr = [...favsArr, countryName];

    localStorage.setItem('favoriteCountries', JSON.stringify(updatedArr));
    setIsFavorite(!isFavorite);
  };

  return (
    <button type="button" onClick={handleToggle} className={styles['fav-btn']}>
      {isFavorite ? '❤️' : '🩶'}
    </button>
  );
}
