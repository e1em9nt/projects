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
    async function loadRegions() {
      try {
        const response = await fetch('/api/region');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: { regions: string[] } = await response.json();
        setRegions(data.regions);
      } catch (err) {
        alert('Failed to load regions' + err);
      }
    }
    loadRegions();
  }, []);

  return (
    <label htmlFor="region-filter" className="region-filter">
      Filter by region:
      <select
        name="region-filter"
        id="region-filter"
        className="region-filter__select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" className="region-filter__option">
          All
        </option>
        {regions.map((region) => (
          <option value={region} key={region} className="region-filter__option">
            {region}
          </option>
        ))}
      </select>
    </label>
  );
}
