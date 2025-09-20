'use client';

import { useFavoriteCountry } from '@/hooks/useFavoriteCountry';

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
  const { isFavorite, handleToggle } = useFavoriteCountry(countryName);

  return (
    <button type="button" onClick={handleToggle} className="favorite-btn">
      {isFavorite ? '❤️' : '🩶'}
    </button>
  );
}
