/**
 * Joins an array of items into comma-separated string list
 * @param items - the arrau of strings to join
 * @returns a single string with items separated by commas
 */
export function formatList(items: string[]): string {
  return items.join(', ');
}

/**
 * Formats a number according to the specified locale
 *
 * @param number - the number to format
 * @param locale - language tag for locale-specific formatting
 * @returns locale-formatted number string
 */
export function formatNumber(number: number, locale = 'en-US'): string {
  return number.toLocaleString(locale);
}

/**
 * Formats a value to display:
 *  - 'null' or 'underfined' -> 'underfined'
 *  - empty array -> 'underfined'
 *  - non-empty array -> comma-joined string
 *  - number -> locale-formatted string
 *  - string -> return as it is
 *
 * @param value - the value to format
 * @param locale - locale tag for number formatting
 * @returns formatted string or 'underfined'
 */
export function formatValue(
  value?: string | number | string[],
  locale = 'en-US'
): string | undefined {
  if (value == null) return undefined;
  if (Array.isArray(value)) {
    if (value.length === 0) return undefined;
    return formatList(value);
  }
  if (typeof value === 'number') return formatNumber(value, locale);
  return value;
}

/**
 * Extracts an array of language names from a record
 *
 * @param languages (optional) - mapping of language codes to names
 * @returns an array of language names or 'underfined'
 */
export function extractLanguages(languages?: Record<string, string>): string[] | undefined {
  return languages ? Object.values(languages) : undefined;
}

/**
 * Extracts and formats currencies into an array of strings
 *
 * @param currencies - mapping of currency codes to objects with 'name' and 'symbol'
 * @returns an array of formatted currency strings or 'underfined'
 */
export function extractCurrencies(
  currencies?: Record<string, { name: string; symbol: string }>
): string[] | undefined {
  return currencies
    ? Object.values(currencies).map((currency) => `${currency.name} (${currency.symbol})`)
    : undefined;
}
