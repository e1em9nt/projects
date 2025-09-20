/**
 * Defines the structure of the props that the Checkbox component expects
 *
 *  @interface CheckboxProps
 */
interface CheckboxProps {
  label: string;
  value?: string;
  id: string;
  checked: boolean;
  onClick: () => void;
}

/**
 * Checkbox component renders a label and a checkbox input
 *
 * @returns {JSX.Element} A JSX element representing a checkbox with a label
 */
function Checkbox({ label, value, id, checked, onClick }: CheckboxProps) {
  return (
    <label htmlFor={id} className="to-do__input to-do__input--checkbox">
      <input type="checkbox" id={id} value={value} checked={checked} onClick={onClick} />
      {label}
    </label>
  );
}

export default Checkbox;
