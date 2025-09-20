import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

/**
 * Accesing the todos context
 *
 * @throws {Error} - if the hook is used outside the of a TodoProvider
 * @returns todos state and dispatch from context
 */
export default function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('Hook “useTodos” was called outside of <TodoProvider>. ');
  }

  return context;
}
