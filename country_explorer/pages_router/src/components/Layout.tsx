'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { useColorScheme } from '@/hooks/useColorScheme';

/**
 * Props for the Layout component
 *
 * @interface LayoutProps
 */
interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that provides global navigation and theme toggling
 *
 * @param props.children - the page content to render below the navbar
 * @returns {JSX.Element}
 */
export default function Layout({ children }: LayoutProps) {
  const { colorScheme, handleToggleScheme } = useColorScheme();

  return (
    <>
      <nav>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/random">Random</Link>
          <Link href="/favorites">Favorites</Link>
        </div>
        <button
          onClick={handleToggleScheme}
          aria-label="Toggle light/dark mode"
          className="toggle-btn"
        >
          {colorScheme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
      {children}
    </>
  );
}
