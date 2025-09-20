import { forwardRef } from 'react';

/**
 * Defines the structure of the props that the Input component expects
 *
 * @interface InputProps
 */
interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Input component renders a styled text input field with validation
 *
 * @returns {JSX.Element} A JSX element representing an input field
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, value, onChange }, ref) => {
  return (
    <input
      ref={ref}
      className="to-do__input to-do__input--text"
      type="text"
      pattern="^[a-zA-Z0-9 ]{3,30}$"
      title="Only letters, numbers, and spaces are allowed. Length must be between 3 and 30 characters."
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
});

export default Input;
