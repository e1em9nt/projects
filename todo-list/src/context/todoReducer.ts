import type { TaskProps } from '../App';

export type Action =
  | { type: 'LOAD'; payload: { tasks: TaskProps[] } }
  | { type: 'ADD'; payload: { label: string } }
  | { type: 'EDIT'; payload: { id: number; label: string } }
  | { type: 'DELETE'; payload: { id: number } }
  | { type: 'TOGGLE'; payload: { id: number } };

export function todoReducer(state: TaskProps[], action: Action): TaskProps[] {
  switch (action.type) {
    case 'LOAD':
      return action.payload.tasks;
    case 'ADD': {
      return [
        ...state,
        {
          id: Date.now(),
          label: action.payload.label.trim(),
          checked: false,
        },
      ];
    }
    case 'EDIT':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, label: action.payload.label.trim(), checked: false }
          : task
      );
    case 'DELETE':
      return state.filter((task) => task.id !== action.payload.id);
    case 'TOGGLE':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, checked: !task.checked } : task
      );
    default:
      return state;
  }
}
