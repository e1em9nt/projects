import { useRef, useState, useEffect, useMemo } from 'react';

// custom hooks
import useTodos from './hooks/useTodos';
import useValidation from './hooks/useValidation';
import useOnClickOutside from './hooks/useOnClickOutside';

// components
import Input from './components/Input';
import UpdateDeleteButtons from './components/UpdateDeleteButtons';
import Checkbox from './components/Checkbox';

import './App.css';

/**
 * Defines the structure of a single task
 *
 * @interface TaskProps
 */
export interface TaskProps {
  id: number;
  label: string;
  checked: boolean;
}

function App() {
  /**
   * Array of tasks stored in state
   * Initialized from localStorage if available, otherwise an empty array
   */
  const { tasks, dispatch } = useTodos();

  // States for Update operation
  const [editing, setEditing] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const validateTask = useValidation(tasks, editingIndex ?? undefined);

  // References
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  // Effects
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /**
   * When entering edit mode, focus the edit input and handle clicks outside the input to trigger save or cancel
   */
  useOnClickOutside(
    editInputRef,
    (e) => {
      const inputEl = editInputRef.current!;

      if (!validateTask(inputEl)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        inputEl.focus();
        return;
      }
      handleEditSave();
    },
    editing,
    '.to-do__btns'
  );

  // Handlers
  /**
   * Validates and appends a new task to the list, then clears the input
   */
  function handleAddBtnClick() {
    if (inputRef.current && inputRef.current.value.trim()) {
      const input = inputRef.current!;

      if (!validateTask(input)) {
        return;
      }

      dispatch({ type: 'ADD', payload: { label: input.value.trim() } });

      input.value = '';
      input.focus();
    }
  }

  /**
   * Enter edit mode for the task at the given index
   *
   * @param index - index of the task to edit
   */
  function handleEdit(index: number) {
    setEditing(true);
    setEditingIndex(index);
    setEditText(tasks[index].label);
  }

  /**
   * Save edits to the currently edited task after validation
   */
  function handleEditSave() {
    if (editingIndex === null) return;

    const inputEl = editInputRef.current!;
    const newText = editText.trim();

    // Sync the input element’s value
    inputEl.value = newText;

    if (!validateTask(inputEl)) {
      return;
    }

    dispatch({
      type: 'EDIT',
      payload: { id: tasks[editingIndex].id, label: newText },
    });

    handleEditCancel();
  }

  /**
   * Cancel edit mode and reset related state
   */
  function handleEditCancel() {
    setEditing(false);
    setEditingIndex(null);
    setEditText('');
  }

  /**
   * Delete the task at the given index. If deleting the one being edited. Exit edit mode
   *
   * @param index - index of the task to delete
   */
  function handleDelete(index: number) {
    // if delete the one were editing - clear edit state
    if (editing && index === editingIndex) {
      handleEditCancel();
      return;
    }

    dispatch({ type: 'DELETE', payload: { id: tasks[index].id } });
  }

  /**
   * Toggle the "checked" state of the task at the given index
   *
   * @param index - index of the task to toggle
   */
  function handleCheckboxClick(index: number) {
    dispatch({ type: 'TOGGLE', payload: { id: tasks[index].id } });
  }

  const renderedTasks = useMemo(() => {
    return tasks.map((task, taskIndex) =>
      editing && editingIndex === taskIndex ? (
        <li key={task.id}>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            ref={editInputRef}
          />
          <UpdateDeleteButtons onEdit={handleEditSave} onDelete={handleEditCancel} />
        </li>
      ) : (
        <li key={task.id}>
          <Checkbox
            label={task.label}
            id={'task-' + taskIndex}
            value={task.label}
            checked={task.checked}
            onClick={() => handleCheckboxClick(taskIndex)}
          />
          <UpdateDeleteButtons
            onEdit={() => {
              handleEdit(taskIndex);
            }}
            onDelete={() => handleDelete(taskIndex)}
          />
        </li>
      )
    );
  }, [tasks, editing, editingIndex, editText]);

  return (
    <div className="to-do">
      <div className="to-do__create">
        <Input placeholder="Create Todo-Task" ref={inputRef} />
        <button className="to-do__btn to-do__btn--add" type="submit" onClick={handleAddBtnClick}>
          Add
        </button>
      </div>
      <ul className="to-do__items">{renderedTasks}</ul>
    </div>
  );
}

export default App;
