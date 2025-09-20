import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

/**
 * Defines the structure of the props that the EditButton component expects
 *
 * @interface EditButtonProps
 */
interface EditButtonProps {
  onClick: () => void;
}

/**
 * EditButton component renders a button with an edit (pen) icon that triggers the provided onClick handler
 *
 * @returns {JSX.Element} A button element containing a pen-to-square icon
 */
function EditButton({ onClick }: EditButtonProps) {
  return (
    <button className="to-do__btn--edit" onClick={onClick}>
      <FontAwesomeIcon icon={faPenToSquare} size="5x" />
    </button>
  );
}

export default EditButton;
