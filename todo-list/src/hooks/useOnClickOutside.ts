import { useEffect } from 'react';

/**
 * Calls 'handler' when a mousedown occurs outside the given element
 * @template T - type of the HTML element we are detecting outside clicks for
 *
 * @param ref - ref pointing to the element to watch
 * @param handler - function to run when a click happens outside the referenced element
 * @param isEditing - when 'true', the outside click listener is active; when 'false', it does nothing
 * @param excludeSelector (optional) - CSS selector for a container we want to ignore
 */
export default function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (e: MouseEvent) => void,
  isEditing: boolean,
  excludeSelector?: string
) {
  useEffect(() => {
    if (!isEditing) return;

    ref.current?.focus();

    function listener(e: MouseEvent) {
      const target = e.target as Node;

      // inside the input
      if (ref.current?.contains(target)) {
        return;
      }

      // inside matching UpdateDeleteButtons container
      if (excludeSelector && (e.target as Element).closest(excludeSelector)) {
        return;
      }

      handler(e);
    }

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler, isEditing, excludeSelector]);
}
