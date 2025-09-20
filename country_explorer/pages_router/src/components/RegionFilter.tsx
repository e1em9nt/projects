'use client';

import { useState, useEffect } from 'react';

/**
 * Props for the RegionFilter component
 *
 * @interface RegionFilterProps
 */
interface RegionFilterProps {
  value: string;
  onChange: (region: string) => void;
}

/**
 * RegionFilter component renders a dropdown to filter countries by region
 *
 * @param props.value - the currently selected region
 * @param props.onChange - handler to call with the new region when changed
 * @returns {JSX.Element}
 */
export default function RegionFilter({ value, onChange }: RegionFilterProps) {
  const [regions, setRegions] = useState<string[]>([]);

  /**
   * fetches available regions once when the component mounts
   */
  useEffect(() => {
    fetch('/api/region')
      .then((res) => res.json())
      .then(({ regions }) => setRegions(regions));
  }, []);

  return (
    <label htmlFor="region-filter">
      Filter by region:
      <select
        name="region-filter"
        id="region-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All</option>
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  );
}
