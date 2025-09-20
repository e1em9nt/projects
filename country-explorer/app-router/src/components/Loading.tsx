/**
 * Renders a simple loading spinner to indicate that content is being loaded
 * @returns the loading spinner element
 */
export default function Loading() {
  return (
    <div className="country__loading">
      <span className="country__loading--spinner"></span>
    </div>
  );
}
