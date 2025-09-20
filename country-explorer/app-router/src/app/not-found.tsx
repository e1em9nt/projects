import Link from 'next/link';

/**
 * NotFoundPage component renders a 404 error page when a country is not found
 *
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__status">404</h1>
      <h4 className="not-found__description">Country Not Found</h4>
      <Link href="/">
        <button className="not-found__btn">Go home</button>
      </Link>
    </div>
  );
}
