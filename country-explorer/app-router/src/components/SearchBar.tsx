'use client';

/**
 * Props for the SearchBar component
 *
 * @interface SearchBarProps
 */
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * SearchBar renders a labeled search input for filtering countries by name
 *
 * @param props.value - controlled value of the search input
 * @param props.onChange - handler to call with the new input value
 * @returns {JSX.Element}
 */
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label htmlFor="country-filter">
      Filter by country name:
      <input
        id="country-filter"
        className="search-bar__input"
        type="search"
        placeholder="Country name..."
        pattern="[a-zA-Z ,]+"
        title="Only letters, spaces, and commas are allowed"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
