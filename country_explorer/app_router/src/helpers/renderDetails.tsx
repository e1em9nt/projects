import { formatValue } from './formatters';

/**
 * Props for renderDetail hepler function
 *
 * @interface DetailProps
 */
interface DetailProps {
  label: string;
  value?: string | number | string[];
  className?: string;
}

/**
 * Renders <li> element with country details, formatting its value via 'formatValue'
 *
 * @param props.label - label text
 * @param props.value (optional) - value to format and display
 * @param props.className (optional) - CSS class name
 * @returns {JSX.Element | null} a list number or null if there no content
 */
export function renderDetail({ label, value, className }: DetailProps) {
  const displayValue = formatValue(value);

  if (!displayValue) return null;

  return (
    <li className={className} key={label}>
      {label}: {displayValue}
    </li>
  );
}
