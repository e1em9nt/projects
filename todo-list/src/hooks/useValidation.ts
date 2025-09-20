import { useCallback } from 'react';
import type { TaskProps } from '../App';
import { isDuplicateTask } from '../helpers/isDublicatedTask';

/**
 * Validate that a task input is non-empty and unique (except at ignoreIndex)
 * @param tasks - current array of tasks
 * @param ignoreIndex - index to ignore when checking for duplicates
 * @returns a function which, given an inputEl, returns 'true' if valid, 'false' otherwise
 */
export default function useValidation(
  tasks: TaskProps[],
  ignoreIndex?: number
): (inputEl: HTMLInputElement) => boolean {
  return useCallback(
    (inputEl: HTMLInputElement): boolean => {
      inputEl.setCustomValidity('');

      if (!inputEl.checkValidity()) {
        inputEl.reportValidity();
        return false;
      }

      // if editing and the label didn't change
      if (ignoreIndex !== undefined && tasks[ignoreIndex].label === inputEl.value.trim()) {
        return true;
      }

      // no dublication allowed
      if (isDuplicateTask(tasks, inputEl.value, ignoreIndex)) {
        inputEl.setCustomValidity('This task already exists.');
        inputEl.reportValidity();

        return false;
      }

      return true;
    },
    [tasks, ignoreIndex]
  );
}
