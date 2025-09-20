import Link from 'next/link';

// styles
import styles from '../styles/Page404.module.css';

/**
 * NotFoundPage component renders a 404 error page when a country is not found
 *
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
  return (
    <div className={styles['not-found']}>
      <h1 className={styles.status}>404</h1>
      <h4 className={styles.description}>Country Not Found</h4>
      <Link href="/">
        <button className={styles['btn-home']}>Go home</button>
      </Link>
    </div>
  );
}
