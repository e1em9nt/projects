import type { TaskProps } from '../App';

/**
 * Check whether a label already exists in the tasks array,
 * ignoring the task at ignoreIndex (if provided).
 */
export function isDuplicateTask(tasks: TaskProps[], label: string, ignoreIndex?: number): boolean {
  const taskText = label.trim();
  return tasks.some((task, index) => index !== ignoreIndex && task.label === taskText);
}
