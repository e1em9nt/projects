import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

/**
 * Defines the structure of the props that the DeleteButton component expects
 *
 * @interface DeleteButtonProps
 */
interface DeleteButtonProps {
  onClick: () => void;
}

/**
 * DeleteButton component renders a button with a trash can icon that triggers a provided onClick handler
 *
 * @returns {JSX.Element} A button element containing a trash icon
 */
function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className="to-do__btn--delete" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} size="5x" />
    </button>
  );
}

export default DeleteButton;
