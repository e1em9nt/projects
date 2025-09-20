import { todoReducer } from './todoReducer';
import type { Action } from './todoReducer';
import type { TaskProps } from '../App';
import { useEffect, useReducer, createContext, type ReactNode, useMemo, type JSX } from 'react';

/**
 * Shape of the value provided by the TodoContext
 *
 * @interface TodoContextValue
 */
interface TodoContextValue {
  tasks: TaskProps[];
  dispatch: React.Dispatch<Action>;
}

/**
 * Context that holds the todo list state and dispatch function
 */
export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

/**
 * Provider component that initializes and persists the todo list, and supplies { tasks, dispatch } to all descendants via context
 * @param children - React nodes that will have access to the todo context
 * @returns {JSX.Element} Context.Provider wrapping the given children and supplying the todo state and dispatch function
 */
export function TodoProvider({ children }: { children: ReactNode }): JSX.Element {
  const [tasks, dispatch] = useReducer(todoReducer, [], () => {
    try {
      const stored = localStorage.getItem('tasks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  /**
   * Persist the tasks array to localStorage whenever it changes
   */
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      alert(error);
    }
  }, [tasks]);

  /**
   * Memoize the context value so it only re-render when the tasks array actually changes
   */
  const todoContextValue = useMemo(() => ({ tasks, dispatch }), [tasks]);

  return <TodoContext.Provider value={todoContextValue}>{children}</TodoContext.Provider>;
}
